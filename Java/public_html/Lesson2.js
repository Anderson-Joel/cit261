/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Object Creation Function
function Pet(name, species, color) {}

//Properties are values associated with an object.
//Example:
//objectName.property    pet.name
//or
//objectName[property]   pet["name"]


var pet = {
    name: "Kitty",
    species: "cat",
    color: "black"
};

document.write(pet.name + "is a " + pet.color + " " + pet.species = ".");
//or
document.write(pet["name"] + "is a " + pet["color"] + " " + pet["species"] = ".");

//Method are actions that can be performed on object.
//Using the "this" keywork make it the owner of the object.

var monitor = {
    brand: "Dell",
    size: 19,
    type: "LCD",
    fullBrand: function () {
        return this.brand + "'s " + this.size + " inch " + this.type + " monitor.";
    }
    document.write(monitor.fullBrand());
};

//When putting the method outside of the variable, do object.method.
//monitor.fullBrand : function() {
//        return this.brand + "'s " + this.size + " inch " + this.type + " monitor.";
//    }

// Inheritance is an object that inheirit properties and methods from its parent
//by using the "prototype" property.
//objectName.prototype.property

function Person(first, last, age, eycolor) {
    this.first = first;
    this.last = last;
    this.age = age;
}
Person.prototype.nationality = "English";

function Person(first, last, age, eycolor) {
    this.first = first;
    this.last = last;
    this.age = age;
}
Person.prototype.name = function () {
    return this.first + " " + this.last;
};

//Instantiation is and instance of an object

function species(name, latinName, status)
{
    this.name = name;
    this.ln = latinName;
    this.status = status;
}

var x = new species
        ("Bonobo",
        "Pan paniscus",
        "endangered");
        document.write(x.name);
        document.write("<br"/>);
        document.write(x.ln);
        document.write("<br"/>);
        document.write(x.status);