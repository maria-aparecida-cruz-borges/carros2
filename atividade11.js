let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100 },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90 },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80 },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85 },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95 }
];

let clientes = [
    { nome: "João", dias: 3 },
    { nome: "Maria", dias: 5 },
    { nome: "Carlos", dias: 2 }
];

for (let i = 0; i < clientes.length; i++) {
    let cliente = clientes[i];
    let precoTotal = 0;

    for (let j = 0; j < carros.length; j++) {
        let carro = carros[j];
        precoTotal += carro.precoDia * cliente.dias;
    }

    console.log(`Preço total da locação para ${cliente.nome}: R$${precoTotal.toFixed(2)}`);
}