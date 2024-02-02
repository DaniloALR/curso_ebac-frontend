function Carro(cor, modelo, marca, anoModelo, anoFabricacao){
    this.modelo = modelo;
    this.marca = marca;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.cor = cor;
}

function Ford(cor, modelo, anoModelo, anoFabricacao){
    this.cor = cor;

    Carro.call(this, modelo, "Ford", anoModelo, anoFabricacao);
}

function Fiat(cor, modelo, anoModelo, anoFabricacao){
    this.cor = cor


    Carro.call(this,cor, modelo, "Fiat",anoModelo, anoFabricacao);
}

const carro1 = new Ford("Azul", "Fiesta", 2020, 2019);
const carro2 = new Fiat("Prata", "Uno", 2004, 2003);
const carro3 = new Fiat("Vermelho", "Toro", 2023, 2022);

console.log(carro3)