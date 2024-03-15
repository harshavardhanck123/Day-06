class circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    //function to get radius value 
    getRadius(){
        return this.radius
    }
    //function to set radius value
    setRadius(){
        this.radius=radius
    }
    //function to get color value
    getColor(){
        return this.color
    }
    //function to set the color value
    setColor(){
        this.color=color
    }
    //to return string of member variables value
    toString(){
        return ["Radius"+" : "+ this.radius + " Color"+" : "+this.color]
    }
    //to compute and return circle area using radius
    getArea(){
        return ((Math.PI)*this.radius*this.radius)  
    }
     //to compute and return circle circumference using radius
    getCircumference(){
        return 2*(Math.PI)*this.radius;
    }
}
//Circle-class constructor with no parameter
var properties1 = new circle()
console.log(properties1.toString())
//Circle-class constructor with one parameter
var properties2 = new circle(2.0)
console.log(properties2.toString())
//Circle-class constructor with all the parameter
var properties3 = new circle(3.0,"Red")

console.log("getRadius: "+properties3.getRadius())
properties3.setRadius(3.3)
console.log("Radius value after setRadius: " +properties3.getRadius())
console.log("getColor: "+properties3.getColor())
properties3.setColor("Blue")
console.log("Color Value after setColor: " + properties3.getColor())
console.log(properties3.toString())
console.log("Area: "+properties3.getArea())
console.log("Circumference: "+properties3.getCircumference())
