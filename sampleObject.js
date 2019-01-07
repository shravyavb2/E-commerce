

//example of objects in javascript


var shirt = {
 
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
console.log(speaker.getData());