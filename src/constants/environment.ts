import { Chrome, Edge, Electron, Firefox, Opera, Safari } from "assets/images";

const environments = [
  { name: "Edge", img: Edge, version: "2" },
  { name: "Chrome", img: Chrome, version: "2" },
  { name: "Firefox", img: Firefox, version: "2" },
  { name: "Opera", img: Opera, version: "2" },
  { name: "Safari", img: Safari, version: "≥ 15" },
  { name: "Electron", img: Electron, version: "2" }
];

export { environments };
