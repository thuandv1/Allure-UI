type ModuleItem = {
  module: string;
  children: {
    name: string;
    notVerify?: boolean;
    outPath?: boolean;
    link?: string;
  }[];
};

export type { ModuleItem };
