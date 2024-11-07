// setTime
function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}
  setInterval(setTime, 1000);
  console.log("Program Selesai");

// Error Handling
function safeDivide(a, b) {
    try {
        if (a === undefined || b === undefined) {
            throw new Error("Harus menginputkan 2 angka!");
        }

        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka!");
        }

        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan!");
        }

        return a / b;
    } catch (error) {
        console.error(error.message);
    }
}

console.log(safeDivide(10, 2)); 
console.log(safeDivide(10, 8)); 
console.log(safeDivide("a", 2));
console.log(safeDivide(8, 0));
console.log(safeDivide(2));
console.log(safeDivide("a"));
console.log(safeDivide());