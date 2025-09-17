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

