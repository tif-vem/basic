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
    //приватный метод для получения баланса
    #getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
//console.log(myAccount.#balance); //приватное свойство

console.log('--- наследование---');

class Dog extends Animal {
    constructor(name, age, breed) {
        //super- вызов конструтокра родительского класса
        super(name, age)
        this.breed = breed; // добавляем свое,новое свойство
    }
    //переопределение метода speak
    speak() {
        console.log(`${this.name} лает: gav-gav.`);
    }
    //можно вызывать и родительский метод внтури дочернего
    displayInfo() {
        super.displayInfo(); //parent
        console.log(`порода: ${this.breed}`);
    }
}

const newDog = new Dog ("reks", 7, "husky");
newDog.displayInfo();//вызовет оба метода:родительский и дочерний.
newDog.speak();

//4. полиморфизм
console.log("polymorfism");

class Cat extends Animal {
    //переопределим метод speak
    speak() {
        console.log(`${this.name} мяукает: Мяу`);
    }
}

const myCat = new Cat("patsya", 2);

//создадим массив из разных обьектов и вызовем один и тот же метод

const animals = [myCat, newDog, new Animal("something", 1)];

//проходим по массиву и вызываем один и тот же метод speak()
//в зависимости от класса обьекта будет вызвана своя реализация этого метода

animals.forEach(animal => {
    animal.speak();
})

