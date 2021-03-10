
var car1 ={
    brand:"Ferrari",
    color:"red",
    price:"400.000$",
    model:"SF90 Spider",
    car1FullInfo: function(){
        return `1) ${this.brand}, ${this.color}, ${this.price}, ${this.model}.`;
    }
    
}


var car2 ={
    brand:"Range Rover",
    color:"black",
    price:"150.000$",
    model:"Sport",
    car2FullInfo: function(){
        return `<br>2) ${this.brand}, ${this.color}, ${this.price}, ${this.model}`;
    }
    
}


var car3 ={
    brand:"Ford Mustang",
    color:"blue",
    price:"50.000$",
    model:"67",
    car3FullInfo: function(){
        return `<br>3) ${this.brand}, ${this.color}, ${this.price}, ${this.model}`;
    }
    
}
console.log(car3.car3FullInfo()+car2.car2FullInfo()+car1.car1FullInfo());
document.getElementById("car").innerHTML=car1.car1FullInfo()+car2.car2FullInfo()+car3.car3FullInfo();



var drageeKeksiClassic ={
    brand:"Napoli",
    snackLevel:"high",
    price:"1.99€",
    demand:"very high",
    dragee1FullInfo: function (){
        return '<br>'+this.brand+' '+ this.snackLevel+' '+ this.price+' '+ this.demand;
    }
} 
var drageeKeksiSaltedCaramel ={
    brand:"Napoli",
    snackLevel:"medium",
    price:"2.50€",
    demand:"medium",
    dragee2FullInfo: function (){
        return this.brand+' '+ this.snackLevel+' '+ this.price+' '+ this.demand;}
}

var drageeKeksiManner ={
    brand:"Napoli",
    snackLevel:"high",
    price:"2.99€",
    demand:"high",
    dragee3FullInfo: function (){
        return this.brand+' '+ this.snackLevel+' '+ this.price+' '+ this.demand;}
}
console.log(drageeKeksiClassic.dragee1FullInfo()+drageeKeksiSaltedCaramel.dragee2FullInfo()+drageeKeksiManner.dragee3FullInfo());
document.getElementById("keksi").innerHTML=drageeKeksiClassic.dragee1FullInfo()+drageeKeksiSaltedCaramel.dragee2FullInfo()+drageeKeksiManner.dragee3FullInfo();


var country1 ={
    country:"Austria",
    pop: 8859000,
    flag:"red,white,red",
    cap: "Vienna",
    president: "VdB",
    country1FullInfo: function(){
        return `<p>Country:${this.country}<br>Population:${this.pop}<br>Flag:${this.flag}<br>Capital:${this.cap}<br>President:${this.president}`
    }
}

var country2 ={
    country:"Spain",
    pop: 47100396,
    flag:"red,yellow,red",
    cap: "Madrid",
    president: "Pedro Sánchez",
    country2FullInfo: function(){
        return `<p>Country:${this.country}<br>Population:${this.pop}<br>Flag:${this.flag}<br>Capital:${this.cap}<br>President:${this.president}`
    }
}

var country3 ={
    country:"Island",
    pop: 103125,
    flag:"blue,red,white",
    cap: "Reykjavík",
    president: "Guðni Thorlacius Jóhannesson",
    country3FullInfo: function(){
        return `<p>Country:${this.country}<br>Population:${this.pop}<br>Flag:${this.flag}<br>Capital:${this.cap}<br>President:${this.president}`
    }
}
console.log(country1.country1FullInfo()+country2.country2FullInfo()+country3.country3FullInfo());
document.getElementById("country").innerHTML=country1.country1FullInfo()+country2.country2FullInfo()+country3.country3FullInfo();