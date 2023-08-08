import React, { useEffect, useId } from "react";

import Glide from "@glidejs/glide";
import { Heading } from "components";
import Image from "next/image";
import clientSay1 from "assets/images/clientSay1.png";
import clientSay2 from "assets/images/clientSay2.png";
import clientSay3 from "assets/images/clientSay3.png";
import clientSay4 from "assets/images/clientSay4.png";
import clientSay5 from "assets/images/clientSay5.png";
import clientSay6 from "assets/images/clientSay6.png";
import clientSayMain from "assets/images/clientSayMain.png";
import quotationImg from "assets/images/quotation.png";
import quotationImg2 from "assets/images/quotation2.png";

export interface SectionClientSayProps {
  className?: string;
}

const DEMO_DATA = [
  {
    id: 1,
    clientName: "Tiana Abie",
    clientAddress: "Malaysia",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
  },
  {
    id: 2,
    clientName: "Lennie Swiffan",
    clientAddress: "London",
    content:
      "This place is exactly like the picture posted on Ciscrypt. Great service, we had a great stay!",
  },
  {
    id: 3,
    clientName: "Berta Emili",
    clientAddress: "Tokyo",
    content:
      "This place is exactly like the picture posted on Ciscrypt. Great service, we had a great stay!",
  },
];

const SectionClientSay: React.FC<SectionClientSayProps> = ({ className = "" }) => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  // @ts-ignore
  useEffect(() => {
    const OPTIONS: Partial<Glide.Options> = {
      perView: 1,
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);

    slider.mount();

    return () => slider.destroy();
  }, [UNIQUE_CLASS]);

  const renderBg = () => {
    return (
      <div className="hidden md:block">
        <Image alt="" className="absolute top-9 -left-20" src={clientSay1} />
        <Image alt="" className="absolute bottom-[100px] right-full mr-40" src={clientSay2} />
        <Image alt="" className="absolute top-full left-[140px]" src={clientSay3} />
        <Image alt="" className="absolute -bottom-10 right-[140px]" src={clientSay4} />
        <Image alt="" className="absolute left-full ml-32 bottom-[80px]" src={clientSay5} />
        <Image alt="" className="absolute -right-10 top-10 " src={clientSay6} />
      </div>
    );
  };

  return (
    <div className={`nc-SectionClientSay relative ${className} `} data-nc-id="SectionClientSay">
      <Heading isCenter name="Good news from far away">
        Good news from far away
      </Heading>
      <div className="relative max-w-2xl mx-auto md:mb-16">
        {renderBg()}
        <Image alt="" className="mx-auto" src={clientSayMain} />
        <div className={`mt-12 lg:mt-16 relative ${UNIQUE_CLASS}`}>
          <Image
            alt=""
            className="absolute -mr-16 opacity-50 md:opacity-100 lg:mr-3 right-full top-1"
            src={quotationImg}
          />
          <Image
            alt=""
            className="absolute -ml-16 opacity-50 md:opacity-100 lg:ml-3 left-full top-1"
            src={quotationImg2}
          />
          <div className="glide__track " data-glide-el="track">
            <ul className="glide__slides ">
              {DEMO_DATA.map((item) => (
                <li key={item.id} className="flex flex-col items-center text-center glide__slide">
                  <span className="block text-2xl">{item.content}</span>
                  <span className="block mt-8 text-2xl font-semibold">{item.clientName}</span>
                  <div className="flex items-center mt-2 space-x-2 text-lg text-neutral-400">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                      />
                      <path
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                      />
                    </svg>
                    <span>{item.clientAddress}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex items-center justify-center mt-10 glide__bullets"
            data-glide-el="controls[nav]"
          >
            {DEMO_DATA.map((item, index) => (
              <button
                key={item.id}
                className="w-2 h-2 mx-1 rounded-full glide__bullet bg-neutral-300 focus:outline-none"
                data-glide-dir={`=${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;
