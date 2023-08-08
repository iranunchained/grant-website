/* eslint-disable no-console */
import { ICreateGrantFormInputs } from "features/Grants/Create/Create";
import { Web3Storage } from "web3.storage";
import { resizeImage } from "utils/resizeImage/client";
import { useMutation } from "@tanstack/react-query";

const storage = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3_STORAGE_TOKEN! });

export const useUploadToIPFSMutation = () =>
  useMutation<string, unknown, Omit<ICreateGrantFormInputs, "metadataCID">>(
    async ({ title, description, image }) => {
      const metadata = JSON.stringify({
        title,
        description,
        image: await resizeImage(image.file!),
      });

      const cid = await storage.put(
        [new File([Buffer.from(metadata)], "metadata.json", { type: "application/json" })],
        { name: `metadata.json`, wrapWithDirectory: false },
      );

      return cid;
    },
  );
