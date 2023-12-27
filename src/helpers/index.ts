const nameToPath = (name: string) => {
  if (name.toLowerCase() === "introduction") {
    return "/";
  }

  return name.toLowerCase().replace(/\s+/g, "-");
};

const coppyToClipBoard = (text: string) => navigator.clipboard.writeText(text);

const padWithLeadingZeros = (num: number, totalLength: number) =>
  String(num).padStart(totalLength, "0");

export {
  nameToPath,
  coppyToClipBoard,
  padWithLeadingZeros,
  // MiniSyntaxHighlighter
};
