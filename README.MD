Avatar Generator – romulomrs

Gerador programático de avatares em SVG.
Funciona com seed determinística, monta cabelo/olhos/boca/roupa/etc. e ainda define um fundo com base na seed.

Todo o código-fonte (incluindo componentes SVG, keygen, gerador e utils) está aqui:
https://github.com/Romulomrs/a3-v2.git

Instalação

Instala o pacote normalmente:

npm install romulomrs

Depois precisa garantir que o seu projeto está usando módulos ES:

{
  "type": "module",
  "dependencies": {
    "romulomrs": "^1.0.0"
  }
}


Se isso não estiver presente, o Node vai chiar com Cannot use import statement outside a module.

Como usar

Importe o gerador padrão:

import { writeFileSync } from "fs";
import generate from "romulomrs/generate.js"; 

const svg = generate("Teste123"); 

writeFileSync("avatar.svg", svg);
console.log("SVG salvo.");



Onde alterar o avatar:
![Image](https://github.com/user-attachments/assets/96c2af07-4cec-4fc3-9a24-459e0ba322c2)



