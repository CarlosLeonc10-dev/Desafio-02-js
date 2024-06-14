/*Dada uma lista de paciente, descubra  o IMC de cada paciente e imprima

'Paciente X  possui o IMC de: Y'

Onde X é o nome do paciente e Y é o YMC desse paciente 

Crie uma função para fazer o cálculo de IMC

*/

const patients = [
    {
        nome: 'Luiz',
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        nome: 'Carlos',
        age: 12,
        weight: 130,
        height: 100,
    },
    {
        nome: 'jose',
        age: 12,
        weight: 120,
        height: 140,
    },
]


function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient){
    return `
    Paciente ${patient.nome} possui o IMC de ${IMC(patient.weight, patient.height)}
    `
}

for(let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}