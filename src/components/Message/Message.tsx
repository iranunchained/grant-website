import React from "react";

interface IMessageProps {
  message: string;
}

const Message: React.FC<IMessageProps> = ({ message }) => {
  return (
    <div className="p-4 text-xl font-semibold text-center dark:text-neutral-100 text-neutral-900 ">
      {message}
    </div>
  );
};

export default Message;
