/* eslint-disable no-console */

import { ButtonPrimary, ConnectWalletOnly, ImageUpload, Input, Textarea } from "components";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { ImageListType, ImageType } from "react-images-uploading";
import React, { useCallback, useEffect, useState } from "react";

import FormItem from "./FormItem";
import { network } from "consts";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useSummonVault } from "web3/hooks";
import { useUploadToIPFSMutation } from "hooks/useUploadToIPFSMutation";

export interface ICreateGrantFormInputs {
  image: ImageType;
  title: string;
  description: string;
  metadataCID: string;
}

export interface PageUploadItemProps {
  className?: string;
}

const Create: React.FC<PageUploadItemProps> = ({ className = "" }) => {
  const [summoned, setSummoned] = useState(false);
  const [image, setImage] = useState<ImageListType>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    reset,
    getValues,
  } = useForm<ICreateGrantFormInputs>();
  const router = useRouter();
  const { mutateAsync, isLoading } = useUploadToIPFSMutation();
  const { metadataCID } = getValues();
  const {
    write: summonVault,
    isLoading: isWriteLoading,
    error: summonVaultError,
    isTransactionLoading,
    isTransactionSuccess,
    data: summonVaultData,
  } = useSummonVault(metadataCID ? `0xIRANUNCHAINED;${metadataCID}` : "");

  const handleFormReset = useCallback(() => {
    setSummoned(false);
    reset();
    setImage([]);
  }, [reset]);

  const onSubmit: SubmitHandler<ICreateGrantFormInputs> = async (data) => {
    const { title, description, image } = data;

    if (!image?.file) {
      return setError("image", { type: "required", message: "Grant image is required." });
    }

    try {
      setSummoned(false);
      setValue("metadataCID", await mutateAsync({ title, description, image }));
    } catch (e) {
      setSummoned(false);
      console.error(e);
    }
  };

  // Show error toast
  useEffect(() => {
    if (summonVaultError) {
      toast.error(summonVaultError);
    }
  }, [summonVaultError]);

  // Show transaction loading/success toasts
  useEffect(() => {
    if (isTransactionLoading) {
      toast.loading("Creating grant...", { id: "loadingToast" });
    }

    if (isTransactionSuccess) {
      toast.remove("loadingToast");

      const subdomain = network === "goerli" ? "goerli." : "";
      const path = `/tx/${summonVaultData?.hash}`;
      const etherscanURL = `https://${subdomain}etherscan.io${path}`;

      toast.success(
        () => (
          <>
            <span>
              Grant created successfully. It will take a minute to appear on the homepage.
            </span>
            <br />
            <a href={etherscanURL} rel="noreferrer" target="_blank">
              Etherscan
            </a>
          </>
        ),
        { id: "successToast" },
      );

      handleFormReset();
      router.push("/");
    }
  }, [handleFormReset, isTransactionLoading, isTransactionSuccess, router, summonVaultData?.hash]);

  // Summon vault
  useEffect(() => {
    if (!summoned && summonVault) {
      summonVault();
      setSummoned(true);
    }
  }, [summonVault, summoned]);

  return (
    <div className={`nc-PageUploadItem ${className}`} data-nc-id="PageUploadItem">
      <div className="container">
        <div className="max-w-4xl mx-auto my-12 space-y-8 sm:lg:my-16 lg:my-24 sm:space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">Create New Grant</h2>
            <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
              Please read{" "}
              <strong>
                <a
                  href="https://forum.iranunchained.com/t/iranunchained-grant-proposal-process/31"
                  rel="referrer noreferrer"
                  target="_blank"
                >
                  👉 Grant Proposal Process 👈
                </a>
              </strong>{" "}
              before posting your grant on chain.
            </span>
          </div>
          <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10 space-y-5 md:mt-0 sm:space-y-6 md:sm:space-y-8">
              <div>
                <h3 className="text-lg font-semibold sm:text-2xl">Image</h3>
                <div className="mt-5">
                  <ImageUpload
                    isInvalid={!!errors.image}
                    value={image}
                    onChange={(imageList) => {
                      setImage(imageList);
                      if (imageList.length !== 0) {
                        clearErrors("image");
                        setValue("image", imageList[0]);
                      }
                    }}
                  />
                  {errors.image && (
                    <span className="flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500">
                      {(errors.image as unknown as FieldError)?.message}
                    </span>
                  )}
                </div>
              </div>

              <FormItem
                error={errors.title?.type === "required" ? "Grant title is required." : ""}
                label="Grant title"
              >
                <Input
                  isInvalid={!!errors.title}
                  {...register("title", { required: true })}
                  name="title"
                  placeholder="Grant title"
                />
              </FormItem>

              <FormItem
                desc={<div>The description will be included on the grant&apos;s detail page.</div>}
                error={
                  errors.description?.type === "required" ? "Grant description is required." : ""
                }
                label="Description"
              >
                <Textarea
                  isInvalid={!!errors.description}
                  {...register("description", { required: true })}
                  className="mt-1.5"
                  name="description"
                  placeholder="Grant description"
                  rows={6}
                />
              </FormItem>

              <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700" />

              <div className="flex justify-end">
                <ConnectWalletOnly>
                  <ButtonPrimary loading={isLoading || isTransactionLoading || isWriteLoading}>
                    {isWriteLoading ? "Confirm in wallet" : "Create Grant"}
                  </ButtonPrimary>
                </ConnectWalletOnly>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
