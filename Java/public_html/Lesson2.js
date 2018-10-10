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

document.getElementById().innerHTML =
        pet.name + "is a " + pet.color + " " + pet.species = ".";
//or
document.getElementById().innerHTML =
pet["name"] + "is a " + pet["color"] + " " + pet["species"] = ".";

//Method are actions that can be performed on object.
//Using the "this" keywork make it the owner of the object.

var monitor = {
    brand : "Dell",
    size : 19,
    type : "LCD",
    fullBrand : function() {
        return this.brand + "'s " + this.size + " inch " + this.type + " monitor.";
    }
};

//When putting the method outside of the variable, do object.method.
//monitor.fullBrand : function() {
//        return this.brand + "'s " + this.size + " inch " + this.type + " monitor.";
//    }

