class Person{
    #firstName ="";
    constructor(firstName){
        this.#firstName = firstName
    }

    walk(){
        console.log(`${this.#firstName} is walking`);
    }
    dancing(){
        console.log(`${this.#firstName} dancing`);
    }
}

const person1 = new person('Mihlali')
const person2 = new person('someone')

person1.walk()
person2.dancing()

// console.log(person1.#firstName);