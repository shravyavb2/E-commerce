

//example of objects in javascript


/*var shirt = {
 
    name : "striped tshirt",
    price: "350Rs/-",
    rating: "4.3",
    color: "red",
    size: "M",
    address:"hyderabad",
    specification:"slim fit",
    getData : function(){
        return this.name + "\t" + this.color + "\t" + this.address
    }



}
console.log(shirt.name);

var speaker = {
 
    name : "Bose Soundlink Micro Portable Bluetooth Speaker  (Blue, Mono Channel)",
    price: "34450Rs/-",
    rating: "4.3",
    color: "red",
    size: "M",
    address:"hyderabad",
    specification:"slim fit",
    getData : function(){
        return this.name + "\t" + this.price + "\t" + this.rating
    }



}
console.log(speaker.getData()); */



// 4 types of functions with combinations of params and return types
/*function with param & return  */

function add(a,b) {
var c = a + b ;
    return c;
}
//add(30,20);
console.log("function with param & return");
console.log(add(30,20)); 

/*function with param & no return  */

function addxy(x,y) {

    console.log (x+y);

}
console.log("function with param & no return");
addxy(40,20); 


/*function with no param &  return */

function addcd( ) {
var c = 80;
var d = 20;
    return (c+d);

}

var e = addcd();
console.log("function with no param & return");
console.log(e); 


/*function with no param &  no return */

function addgrt( ) {
 var m;
 var n;
 console.log("function with no param & no return");
    if(m > n){
        console.log("m is greater than n");
    }

    else{
        console.log("n is greater than m");
    }

}

addgrt(25,20); 

//this is function type
