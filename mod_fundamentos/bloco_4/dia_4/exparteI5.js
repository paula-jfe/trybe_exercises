let info1 = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
  };

let info3 = {
    personagem: info1.personagem + " e " + info2.personagem,
    origem: info1.origem + " e " + info2.origem,
    nota: info1.nota + " e " + info2.nota,
    recorrente: "",
};

   if (info1.recorrente === "Sim" && info2.recorrente === "Sim") {
       info3.recorrente = "Ambos recorrentes";
   } else {
       info3.recorrente = info1.recorrente + " e " + info2.recorrente;
   }
   for (let i in info3) { 
    console.log(info3[i]);
   } 