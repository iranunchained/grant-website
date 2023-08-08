import React from "react";
import Link from "next/link";
import Image from "next/image";

import logoTypeImg from "assets/images/logoType.svg";
import logoImg from "assets/images/logo.svg";

export interface LogoProps {
  logoType?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ logoType, className = "" }) => {
  return (
    <Link className={`ttnc-logo inline-block text-primary-6000 ${className}`} href="/">
      <Image
        alt="Logo"
        className={`block w-auto max-h-12 `}
        src={logoType ? logoTypeImg : logoImg}
      />
    </Link>
  );
};

export default Logo;
