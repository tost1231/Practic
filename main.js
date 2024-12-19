import people from "./peoplearray.js";
import search from "./search.js";


const searchField1 = 'age';
const searchValue1 = 34;

console.log(`Пошук за параметром ${searchField1} зі значенням ${searchValue1}`);

search(people, searchField1, searchValue1)
    .then(results => {
        results.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        });
    })
    .catch(error => {
        console.log(error);
    });   



const searchField2 = 'name';
const searchValue2 = 'Марія';

console.log(`Пошук за параметром ${searchField2} зі значенням ${searchValue2}`);

search(people, searchField2, searchValue2)
    .then(results => {
        results.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        });
    })
    .catch(error => {
        console.log(error);
    });




const searchField3 = 'age';
const searchValue3 = 29;

console.log(`Пошук за параметром ${searchField3} зі значенням ${searchValue3}`);

search(people, searchField3, searchValue3)
    .then(results => {
        results.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        });
    })
    .catch(error => {
        console.log(error);
    });
