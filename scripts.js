const year =2024;
const fua = (name, year2 =2021 ) => {

    const age = year - year2;
    if (year2 === null) {
        return `Я ${name}, ${age}`;
    }
    return `Я ${name}, мені ${age} років`;
};

console.log(fua('Іван', 1990)); 
console.log(fua('Марія')); 
