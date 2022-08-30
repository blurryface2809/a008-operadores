// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

let firstnumber = Number(prompt`Digite um número please`)
let secondnumber = Number(prompt`Digite mais um número por favorzinho`)

// ```
// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

console.log (`O primeiro numero é maior que segundo? ${firstnumber>secondnumber}`)
console.log (`O primeiro numero é igual ao segundo? ${firstnumber===secondnumber}`)
console.log (`O primeiro numero é divisível pelo segundo? ${(firstnumber/secondnumber)===0}`)
console.log (`O segundo numero é divisível pelo primeiro? ${(secondnumber/firstnumber)===0}`)



// divisível = com resto zero

// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.