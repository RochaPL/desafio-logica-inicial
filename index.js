let nome = "Apolo, The cat";
let nivel = 100000;
let contadorLinha = 0;
let rank = [
    ["Ferro", 0, 1000],
    ["Bronze", 1001, 2000],
    ["Prata", 2001, 5000],
    ["Ouro", 5001, 7000],
    ["Platina", 7001, 8000],
    ["Ascendente", 8001, 9000],
    ["Imortal", 9001, 10000],
    ["Radiante", 10001, "máx"]
]

while (contadorLinha < 8){
    if (nivel >= rank[contadorLinha][1]){
        if(contadorLinha === 7){

        console.log ("O Herói de nome " + nome + " está no nível de " + rank[contadorLinha][0]);
        break;

        }

        if (nivel <= rank[contadorLinha][2]){ 

        console.log ("O Herói de nome " + nome + " está no nível de " + rank[contadorLinha][0]);
        break;

        }
    
    }
    contadorLinha++;
}
