const nameToPath = (name: string) => {
  if (name.toLowerCase() === "introduction") {
    return "/";
  }

  return name.toLowerCase().replace(/\s+/g, "-");
};

const nameToKey = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, "_");
};

const coppyToClipBoard = (text: string) => navigator.clipboard.writeText(text);

const padWithLeadingZeros = (num: number, totalLength: number) =>
  String(num).padStart(totalLength, "0");

const LocalStorage = {
  add(key: string, item: string) {
    localStorage.setItem(key, item);
  },
  get(key: string) {
    return localStorage.getItem(key);
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
};

export {
  nameToPath,
  coppyToClipBoard,
  padWithLeadingZeros,
  nameToKey,
  LocalStorage
};
