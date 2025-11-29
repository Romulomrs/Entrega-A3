import { writeFileSync } from "fs";
import generate from "romulomrs/generate.js";  // <-- AQUI: default, sem chaves

const svg = generate("Teste123");

writeFileSync("avatar.svg", svg);
console.log("SVG salvo.");

