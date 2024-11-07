// Urutan awal custommer
const custommer = ['Ray', 'Fiki', 'Fadhilla', 'Farah'];
console.log("Antrian Awal : " + custommer);

// Add to end new custommer
custommer.push("Nabila");
custommer.push("Maza", "Elsi");
console.log(custommer);

// Remove from end custommer
custommer.pop();
console.log(custommer);

// Remove from start custommer (1,2)
custommer.shift();
custommer.shift();
console.log(custommer);

// Add to start new custommer
custommer.unshift("Tomi");
console.log(custommer);