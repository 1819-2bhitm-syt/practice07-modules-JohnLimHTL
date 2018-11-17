const encrypt = require('./encrypt.js');
const decrypt = require('./decrypt.js');

let plaintext = "Dieser Text ist sehr geheim.";
let password = "sadsads890d80sdadas";

// Verschlüsselt //
console.log();
plaintext = encrypt(plaintext, password);
console.log(`Der verschlüsselte Text lautet:
${plaintext}`);

// Entschlüsselt //
console.log();
plaintext = decrypt(plaintext, password);
console.log(`Der wieder entschlüsselte Text lautet:
${plaintext}`);