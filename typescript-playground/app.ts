import { Dictionary, Customer, User, X, Y } from './classes/index';

let foo = 'VKB';
console.log(foo);

let c = new Customer(3);
console.log(c.calculateNumber(10));

c.doSomething();


let d = new Dictionary();
d.set('saarbrücken', 66111);

console.log('saarbrücken =', d.get('saarbrücken'));