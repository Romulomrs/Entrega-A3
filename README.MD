Avatar Generator – romulomrs

Gerador programático de avatares em SVG.
Funciona com seed determinística, monta cabelo/olhos/boca/roupa/etc. e ainda define um fundo com base na seed.

Todo o código-fonte (incluindo componentes SVG, keygen, gerador e utils) está aqui:
https://github.com/Romulomrs/a3-v2.git

Instalação

Abra um folder em branco e dê o comando:

npm install romulomrs

Depois precisa garantir que o seu projeto está usando módulos ES, no json:

{
  "type": "module",
  "dependencies": {
    "romulomrs": "^1.0.0"
  }
}


Se isso não estiver presente, o Node vai chiar com Cannot use import statement outside a module.

Como usar
Crie um arquivo para inicializar o pacote, como "avatar.js"
Importe o gerador padrão:

import { writeFileSync } from "fs";
import generate from "romulomrs/generate.js"; 

const svg = generate("Teste123"); 

writeFileSync("avatar.svg", svg);
console.log("SVG salvo.");



Onde alterar o avatar:
![Image](https://github.com/user-attachments/assets/96c2af07-4cec-4fc3-9a24-459e0ba322c2)

Então, depois de se certificar de estar em Entrega-A3, dê o comando "node (nome do seu script.js)"

EXEMPLOS DE AVATARES:

![Image](https://github.com/user-attachments/assets/79df1a96-37ff-4e36-8f63-e58a36f3c625)
![Image](https://github.com/user-attachments/assets/0b4e20bf-e1d4-4e04-bba2-2e59c8eb230d)
![Image](https://github.com/user-attachments/assets/214c9be1-f11c-4680-9a97-3cc2ee1494c5)

![Image](https://github.com/user-attachments/assets/7a56dbcc-1e8c-43b8-a331-e138b74f74b1)
![Image](https://github.com/user-attachments/assets/98d1095a-1fa5-4dbb-8a7b-4090b37e2823)
![Image](https://github.com/user-attachments/assets/ea34690b-bc04-40d0-ae38-d101003e6240)

![Image](https://github.com/user-attachments/assets/59a8871f-bdf0-4de5-a624-5d9413196e2c)
![Image](https://github.com/user-attachments/assets/83290491-bd0d-4a48-b6ba-284c6f0032c2)
![Image](https://github.com/user-attachments/assets/86f74144-885d-4649-a3b6-8ee317d8b10d)





