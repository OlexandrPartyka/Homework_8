const fs = require('fs');

const name = prompt("Введіть ваше ім'я: ");
const surname = prompt("Введіть ваше прізвище: ");
const phoneNumber = prompt("Введіть ваш номер телефону: ");
const street = prompt("Введіть вашу вулицю проживання: ");

const personData = {
  name,
  surname,
  phoneNumber,
  street,
};

const dataToSave = JSON.stringify(personData, null, 2);

fs.writeFileSync("personData.json", dataToSave);

console.log("Дані було збережено в personData.json");
