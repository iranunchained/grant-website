import { ArrowLeftIcon } from "@heroicons/react/solid";
import { ButtonPrimary } from "components";
import Image from "next/image";
import { NextPage } from "next";
import notFoundImage from "assets/images/404.png";

const NotFoundPage: NextPage = () => {
  return (
    <div className="flex items-center flex-1">
      <div className="container flex flex-col-reverse items-center justify-center px-5 text-neutral-700 dark:text-neutral-200 lg:flex-row">
        <div>
          <div className="text-5xl font-bold font-dark">404</div>
          <p className="text-2xl font-light leading-normal md:text-3xl">
            Sorry we couldn&apos;t find this page.
          </p>
          <p className="my-8">
            But don&apos;t worry, you can find plenty of other things on our homepage.
          </p>

          <ButtonPrimary>
            <ArrowLeftIcon className="w-6 h-6 mr-2" />
            back to homepage
          </ButtonPrimary>
        </div>
        <div className="max-w-2xl">
          <Image alt="Not Found" src={notFoundImage} />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
