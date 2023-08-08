import Button, { ButtonProps } from "components/Button/Button";

import React from "react";

const ButtonThird: React.FC<ButtonProps> = ({
  className = "border text-neutral-700 border-neutral-200 dark:text-neutral-200 dark:border-neutral-700",
  ...args
}) => {
  return <Button className={`ttnc-ButtonThird ${className}`} {...args} />;
};

export default ButtonThird;
