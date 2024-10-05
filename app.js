//Inputs
const person ={
    Name: "RJ",
    age: 19,
    hobby: "Reading"
}

//Process and Output
console.log("Hello!!")
console.log("Name: " + person1.Name)
console.log("Age: " + person1.age)
console.log("Hobby: " + person1.hobby)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

//Adding class named Person
class Person{
        constructor (Name, age, hobby) {
            this.Name= Name;
            this.age = age;
            this.hobby= hobby;
        }
        //Solution 1/Console.log
        DisplayInfo(){
            console.log("Name: " + person1.Name);
            console.log("Age" + person1.age);
            console.log("Hobby" + person1.hobby);
        }
        //Solution 2/HTML
        DisplayViaHTML(){
            const personElement = document.getElementById('person1');
            personElement.innerHTML =`
            <strong>Name:</strong> ${this.Name}<br> 
            <strong>Age:</strong> ${this.age}<br> 
            <strong>Name:</strong> ${this.hobby}<br> 
            `;
        }
    }
    //creating instance for person
    const person1 = new Person(RJ, 19, Reading)
    //Calling Method
    person1.DisplayInfo();
