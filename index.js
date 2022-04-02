import { User } from './User.js';
import { Product } from './Product.js';

const person = new User('Jair', 'Gutierrez')
const {name, lastname } = person;
console.log(name, lastname )

console.log(new Product("Laptop", 300));