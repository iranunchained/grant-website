const CONFIGS = {
  REPLACE_SPACE_WITH: "__",
  JOIN_NAME_WITH: "**",
};

export interface ICreateContractParams {
  name: string;
  imageCID: string;
  metadataCID: string;
  separator?: string;
}

const replaceSpace = (text: string) => text?.replace(/\s/g, CONFIGS.REPLACE_SPACE_WITH);

const addSpace = (text: string) => {
  const regex = new RegExp(CONFIGS.REPLACE_SPACE_WITH, "g");

  return text?.replace(regex, " ");
};

export const createContractName = ({ name, metadataCID, imageCID }: ICreateContractParams) => {
  const nameWithoutSpace = replaceSpace(name);

  return [nameWithoutSpace, imageCID, metadataCID].join(CONFIGS.JOIN_NAME_WITH);
};

export const parseContractName = (contractName: string) => {
  if (!contractName.includes(CONFIGS.JOIN_NAME_WITH)) return {};

  const [name, imageCID, metadataCID] = contractName.split(CONFIGS.JOIN_NAME_WITH);
  const nameWithSpace = addSpace(name);

  return { name: nameWithSpace, imageCID, metadataCID };
};
