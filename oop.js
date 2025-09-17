//oop - парадигма программрования,
//которая использует "обьекты" для представления
//данных и методов для работы с этими данными.

//1. Класс и Обьект (Class & Object)
//класс - "чертеж" для создания обьектов
//обьект - экземпляр класса с собственными данными
//object - instance of class

class Animal {
    //конструктор - специальный метод
    //для создания и инициализации обьекта
    
    constructor(name, age) {
        //this - ссылка на текущий обьект
        //reference to the current object
        this.name = name;
        this.age = age;
    }
    //метод - это функция внутри обьекта
    speak() {
        console.log(`${this.name} gav.`);
    }
    displayInfo() {
        console.log(`Имя: ${this.name}, возраст: ${this.age}`);
    }
}

const genericAnimal = new Animal('Some Animal', 5);
const myDog = new Animal ("reks", 8);
genericAnimal.displayInfo();
myDog.displayInfo();
myDog.speak();

//2. Инкапсуляция (Encapsulation)
//Инкапсуляция - скрытие внутренней реализации от внешнего мира
//или же - обьединение данных и методов
//и работы с этими данными в одном классе
console.log('--- Инкапсуляция ---');

class BankAccount {
    //# - означает что свойство приватное
    // private property
    #balance =0; //приватное свойство
    constructor(initialBalance) {
        if(initialBalance > 0) {
            this.#balance = initialBalance;
        }
    }
    //публичный метод для внесения денег
    deposit(amount) {
        if(amount > 0) {
            this.#balance += amount;
            console.log(`внесено: ${amount}.новый баланс: ${this.#balance}`);
        }
    }
    //публичный метод для снятия
    withdraw(amount) {
        if(amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`снято ${amount}. новый баланс: ${this.#balance}`);
        } else {
            console.log(' недостаточно средств или неверная суммаю');
        }
    }
    
}