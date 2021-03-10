class Hotel {
    hotelName;
    numberOfNights = (Math.floor(Math.random() *11));
    nights;
    address;
    image;
    

    constructor(hName, nigh, location, pic) {
        this.hotelName = hName;
        this.nights = nigh; 
        this.address = location;
        this.image = pic;
    }

    showAvailabilty(){
        console.log(this.numberOfNights, this.nights);

        if (this.nights > this.numberOfNights) {
            document.getElementById("output").innerHTML = "Sorry we have no availabilty"
        } else {
            var btn = document.createElement("BUTTON");     
            btn.innerHTML = "I'll reserve";                   
            document.getElementById("output").appendChild(btn);              
        }

        }
    }

    var guest1 = new Hotel ("Hilton", 4, "Beverly Hills", "Nice Picture Here");

    guest1.showAvailabilty();