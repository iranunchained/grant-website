import { ButtonPrimary, ConnectWalletButton, Input, NcImage, NcModal } from "components";
import { ClipboardCheckIcon, ClipboardIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { IBalance, TGrant } from "types";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { formatEther, parseEther } from "viem";
import { useAccount, useContractRead, usePrepareSendTransaction, useSendTransaction } from "wagmi";

import { ETH_USD_ORACLE_ADDRESS } from "consts";
import FormItem from "../Create/FormItem";
import QRCode from "qrcode.react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { aggregatorV3InterfaceABI } from "web3";
import clsx from "clsx";
import { formatUnits } from "@ethersproject/units";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";
import useClipboard from "react-use-clipboard";
import { useDebounce } from "use-debounce";
import { useETHBalance } from "web3/hooks/useETHBalance";

const Markdown: React.FC<{ children: string }> = ({ children }) => (
  <ReactMarkdown
    className="text-neutral-500 dark:text-neutral-400"
    components={{
      a: ({ node: _, children, className, ...props }) => (
        <a {...props} className={clsx(className, "underline")}>
          {children}
        </a>
      ),
      em: ({ node: _, children, className, ...props }) => (
        <em {...props} className={clsx(className, "italic")}>
          {children}
        </em>
      ),
      strong: ({ node: _, children, className, ...props }) => (
        <strong {...props} className={clsx(className, "font-semibold")}>
          {children}
        </strong>
      ),
      p: ({ node: _, children, className, ...props }) => (
        <p {...props} className={clsx(className, "mb-4 last:mb-0")}>
          {children}
        </p>
      ),
    }}
    linkTarget="_blank"
    remarkPlugins={[remarkGfm]}
  >
    {children}
  </ReactMarkdown>
);

const Tag: React.FC<{ text: string; className?: string }> = ({ text, className }) => (
  <div
    className={clsx(
      "text-xs font-bold leading-sm uppercase px-3 py-1 bg-green-100 dark:bg-green-900 text-green-500 rounded-full mr-1",
      className,
    )}
  >
    {text}
  </div>
);

const CopyInput: React.FC<{ address: string }> = ({ address }) => {
  const [copied, copy] = useClipboard(address, { successDuration: 1500 });

  return (
    <div className="relative grow max-w-none cursor-pointer" onClick={copy}>
      <Input
        disabled
        className="w-full pr-10 [ nc-box-has-hover nc-dark-box-bg-has-hover ]"
        rounded="rounded-lg"
        sizeClass="h-[42px] pl-4 py-3"
        type="text"
        value={address}
      />
      <span className="absolute -translate-y-1/2 top-1/2 right-3 text-neutral-500">
        {copied ? (
          <ClipboardCheckIcon className="w-5 h-5" />
        ) : (
          <ClipboardIcon className="w-5 h-5" cursor="pointer" />
        )}
      </span>
    </div>
  );
};

const DonationModal: React.FC<{
  grant: TGrant;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ grant, isOpen, setOpen }) => {
  const address = grant.vault.id as `0x${string}`;

  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedAmount] = useDebounce(inputValue, 500);
  const etherValue = useMemo(() => {
    if (isNaN(parseFloat(debouncedAmount))) {
      return undefined;
    }
    try {
      return parseEther(debouncedAmount);
    } catch {
      return undefined;
    }
  }, [debouncedAmount]);
  const isValidValue = etherValue != null && etherValue != BigInt(0);

  const { config, error } = usePrepareSendTransaction({
    to: address,
    value: etherValue,
    enabled: isValidValue,
  });
  const errorMessage = error?.message?.split("\n")?.[0];
  const isValid = isValidValue && !errorMessage;

  const { sendTransaction } = useSendTransaction({
    ...config,
    onSuccess() {
      toast.success("Sending donation!");
    },
  });

  const { isConnected } = useAccount();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [inputRef, isOpen]);

  return (
    <NcModal
      contentExtraClass="max-w-xs p-2"
      isOpen={isOpen}
      modalTitle="Donate"
      renderContent={() => (
        <form
          className="flex flex-col space-y-8 items-center mx-auto"
          style={{ maxWidth: 420 }}
          onSubmit={(event) => {
            event.preventDefault();
            sendTransaction?.();
          }}
        >
          <div className="space-y-4 flex flex-col items-center">
            <FormItem className="space-y-4" error={errorMessage}>
              <Input
                ref={inputRef}
                required
                className="text-center"
                inputMode="decimal"
                isInvalid={!!errorMessage}
                name="amount"
                pattern="[0-9]*[.,]?[0-9]*"
                placeholder="Amount in ETH"
                rounded="rounded-full"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
            </FormItem>
            <div>
              {isConnected ? (
                <ButtonPrimary disabled={!isValid} type="submit">
                  Send {etherValue != null && formatEther(etherValue)} ETH
                </ButtonPrimary>
              ) : (
                <ConnectWalletButton />
              )}
            </div>
          </div>
          <div className="self-center space-y-4">
            <div className="rounded-lg overflow-hidden [ nc-box-has-hover nc-dark-box-bg-has-hover ]">
              <QRCode level="H" renderAs="svg" size={240} value={address} />
            </div>
            <CopyInput address={address} />
          </div>
        </form>
      )}
      renderTrigger={() => null}
      onCloseModal={() => setOpen(false)}
    />
  );
};

export interface DetailsProps {
  id: string;
  grant: TGrant;
  className?: string;
}

const Details: React.FC<DetailsProps> = ({ grant, className = "" }) => {
  const [isFundModalOpen, setFundModalOpen] = useState(false);

  const currentRound = grant.currentRound;
  const [currentRaise, setCurrentRaise] = useState<IBalance | void>(grant.currentRound?.raised);

  const updates = useMemo(
    () => [...(grant.historicalRounds ?? [])].reverse(),
    [grant.historicalRounds],
  );

  const { getETHBalance } = useETHBalance();

  useEffect(() => {
    getETHBalance(grant.vault.id).then(setCurrentRaise);
  }, [grant.id, grant.vault.id, getETHBalance]);

  const historicalRaised = useMemo(
    () =>
      (grant.historicalRounds ?? []).reduce(
        (sum, round) => sum + parseFloat(round.raised.formatted),
        0,
      ),
    [grant.historicalRounds],
  );

  const { data: [, answer, , ,] = [] } = useContractRead({
    address: ETH_USD_ORACLE_ADDRESS,
    abi: aggregatorV3InterfaceABI,
    functionName: "latestRoundData",
    watch: true,
    cacheTime: 120 * 1000,
  });

  const simpleETHUSD = useMemo(() => (!answer ? 0 : Number(formatUnits(answer, 8))), [answer]);

  const currentBalance = parseFloat(currentRaise?.formatted ?? "0");

  const currentBalanceUSD = useMemo(
    () =>
      (currentBalance * simpleETHUSD).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      }),
    [currentBalance, simpleETHUSD],
  );

  const totalRaisedUSD = useMemo(() => {
    const amount = historicalRaised * simpleETHUSD;

    return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }, [historicalRaised, simpleETHUSD]);

  return (
    <div className={clsx("nc-NftDetailPage", className)} data-nc-id="NftDetailPage">
      <section className="container flex py-11">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 md:gap-14">
          <div className="space-y-8 lg:space-y-10">
            <NcImage
              containerClassName="aspect-w-11 aspect-h-12 rounded-3xl overflow-hidden"
              src={grant?.image}
            />
          </div>

          <div className="pt-10 border-t-2 lg:pt-0 xl:pl-10 border-neutral-200 dark:border-neutral-700 lg:border-t-0">
            <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
              <div className="space-y-5 pb-9">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">{grant.title}</h2>

                  <DonationModal
                    grant={grant}
                    isOpen={isFundModalOpen}
                    setOpen={setFundModalOpen}
                  />
                  <ButtonPrimary
                    className="flex-shrink-0 ml-2"
                    onClick={() => setFundModalOpen(true)}
                  >
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                      <path
                        d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7 12H14"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>

                    <span className="ml-2.5">Donate</span>
                  </ButtonPrimary>
                </div>
              </div>

              <div className="py-9">
                <Markdown>{grant.description}</Markdown>
              </div>

              <div className="py-9">
                {Boolean(currentRound?.note || currentRound?.tags) && (
                  <div className="relative flex flex-col group h-full !border-0 p-4">
                    <div className="mb-2 flex">
                      {(currentRound!.tags ?? []).map((t, j) => (
                        <Tag key={j} text={t} />
                      ))}
                      {Boolean(currentRound?.link) && (
                        <a
                          className="underline ml-auto text-sm text-neutral-800 dark:text-neutral-400"
                          href={currentRound!.link}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Post
                          <ExternalLinkIcon className="h-4 w-4 inline ml-1" />
                        </a>
                      )}
                    </div>
                    {Boolean(currentRound?.note) && <Markdown>{currentRound!.note!}</Markdown>}
                  </div>
                )}

                {Boolean(currentRaise) && (
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <div className="relative flex flex-col items-baseline flex-1 p-6 border-2 border-green-500 sm:flex-row rounded-xl w-1/2 mr-1">
                      <span className="text-3xl font-semibold text-green-500 xl:text-4xl">
                        {currentBalance.toFixed(2)} ETH
                      </span>
                      <span className="text-lg text-neutral-400 sm:ml-5">
                        (≈ {currentBalanceUSD})
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {updates.length === 0 ? null : (
                <section className="pb-9 pt-14 text-neutral-400">
                  <h2 className="text-2xl font-semibold sm:text-xl lg:text-2xl">Previous Rounds</h2>
                  {updates.length === 0 ? null : (
                    <div className="flex flex-col flex-wrap sm:flex-row sm:items-end sm:justify-between">
                      {historicalRaised ? (
                        <div className="flex flex-col items-baseline flex-1 sm:flex-row rounded-xl w-1/2">
                          <span className="text-3xl font-semibold xl:text-4xl">
                            {historicalRaised.toFixed(2)} ETH
                          </span>
                          <span className="text-lg text-neutral-400 sm:ml-5">
                            (≈ {totalRaisedUSD})
                          </span>
                        </div>
                      ) : (
                        <div className="w-full h-24 bg-white border-2 rounded-lg dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" />
                      )}
                    </div>
                  )}
                  <div className="space-y-4 mt-6">
                    {updates.map((round, index) => (
                      <div
                        key={index}
                        className="relative flex flex-col group h-full !border-0 [ nc-box-has-hover nc-dark-box-bg-has-hover ] p-4"
                      >
                        <div className="mb-2 flex">
                          {round.tags.map((t, j) => (
                            <Tag key={j} text={t} />
                          ))}
                          {Boolean(round.link) && (
                            <a
                              className="underline ml-auto text-sm text-neutral-800 dark:text-neutral-400"
                              href={round.link}
                              rel="noreferrer"
                              target="_blank"
                            >
                              Post
                              <ExternalLinkIcon className="h-4 w-4 inline ml-1" />
                            </a>
                          )}
                        </div>
                        <Markdown>{`**Raised ${round.raised.formatted}:** ${round.note}`}</Markdown>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
