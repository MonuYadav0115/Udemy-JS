
let computer = {cpu: 12};
let lenovo = {
    screen:"HD",
    __proto__:computer,
};
let tomHardware = {};

console.log("cumputer" , lenovo.__proto__)
console.log("cumputer" , computer.__proto__)
