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
