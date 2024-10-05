class Person{

    //This are the data fields in Private
    #hair;
    #eyes;
    #smile;
   

    constructor(hair, eyes, smile){
        this.#hair = hair;
        this.#eyes = eyes;
        this.#smile = smile;
    }
    //The getters to return the private data fields
    get hair(){
        return this.#hair;
    }
    get eyes(){
        return this.#eyes;
    }
    get smile(){
        return this.#smile;
    }
    
    //Solution 1 displaying using console.log
    displayInfo(){
        console.log("Hair: " + this.hair);
        console.log("Eyes: " + this.eyes);
        console.log("Smile: " + this.smile);
    }
    //Solution 2 Displaying via html
    displayInfoHTML() {
        const personElement = document.getElementById('person'); 
        personElement.innerHTML = `
        <strong>Hair:</strong> ${this.hair}<br>
        <strong>Eyes:</strong> ${this.eyes}<br>
        <strong>Smile:</strong> ${this.smile}
        `;
    }
}
class add extends Person{
    constructor(hair, eyes, smile, aura){
        super(hair, eyes, smile);
        this.aura = aura;
    }

    //Overriding the displayInfo method
    displayInfo(){
        super.displayInfo();
        console.log("Aura: " + this.aura);
    }

    //Extending the displayInfoHTML method
    displayInfoHTML(){
        super.displayInfoHTML();
        const personElement = document.getElementById('person'); 
        personElement.innerHTML += `
        <br><strong>Aura:</strong> ${this.aura}`
    }
    
}
 //Added instance for the object
 const person = new add('Midnight Waves', 'Golden Hazel', 'Radiant', 'Bright And Magnetic');

//This statement is what displays the output
person.displayInfo();