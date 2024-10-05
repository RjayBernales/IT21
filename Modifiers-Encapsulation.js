class Person {

    //This are the data fields in Private
    #name;
    #type;
    #category;
    #entry;

    constructor(name, type, category, entry){
        this.#name = name;
        this.#type = type;
        this.#category = category;
        this.#entry = entry;
    }

    //The getters to return the private data fields
    get name(){
        return this.#name;
    }
    get type(){
        return this.#type;
    }
    get category(){
        return this.#category;
    }
    get entry(){
        return this.#entry;
    }
    //Solution 1 displaying using console.log
    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Type: " + this.type);
        console.log("Category: " + this.category);
        console.log("Entry No.: " + this.entry);
    }
}
    //Added instance for the class object
    const person = new Person("Rain", "Portrait", "Cartoon", 3);

    //codes/statements calling the method
    person.displayInfo();