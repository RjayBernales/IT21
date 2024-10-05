const art = {
    name: "Rain",
    type: "Landscape",
    entry: 1
   }

   //Process and Output
   console.log("Art Registration Details");
   console.log("Name: " + art.name);
   console.log("Type: "  +art.type);
   console.log("Entry No.: " + art.entry);  
   console.log("~~~~~~~~~~~~~~~~~~~~~~~~");

   //Adding class
   class arts {
    constructor(name, type, entry){
        this.name = name;
        this.age = type;
        this.hobby = entry;
    }

    //Solution 1 displaying using console.log
    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.type);
        console.log("Hobby: " + this.entry);
     }
    //Solution 2 Displaying via html
    displayViaHTML() {
        const personElement = document.getElementById('person'); 
        personElement.innerHTML = `
        <strong>Name:</strong> ${this.name}<br>
        <strong>Age:</strong> ${this.type}<br>
        <strong>Hobby:</strong> ${this.entry}
        `   ;
    }
}
