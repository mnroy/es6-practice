class Parent{
    constructor(){
        this.FatherName = "jastin bebi";
    }
}

class Chaild extends Parent{
    constructor(name){
        super();
        this.Name = name;
    }
    getFullName(){
        return this.Name + " " + this.FatherName;
    }
}
const fristChild = new Chaild("jeson doo");
const secendChild = new Chaild("Tom Heandla");
console.log(fristChild.getFullName());
console.log(secendChild);