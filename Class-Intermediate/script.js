class Animal {
    name;
    family;
    endangered;
    habitat;
    class;

    constructor(nam, fam, danger, hab, clas){
        this.name = nam;
        this.family = fam;
        this.endangered = danger;
        this.habitat = hab;
        this.class = clas;
    }
    animalInfo(){
        return `<br> ${this.name} <br> ${this.family} <br> ${this.endangered} <br> ${this.habitat} <br> ${this.class}`
    };

}
var animal1 = new Animal("Hase", "Hase", false, "Tundra", "Säugetier");
var animal2 = new Animal("Walhai", "Walhai", true, "Ozean", "Knorpelfische");
var animal3 = new Animal("Otter", "Marder", true, "See", "Säugetier");

class NewClassAnimal extends Animal {
    diet;
    constructor (nam, fam, danger, hab, clas, diet){
        super(nam, fam, danger, hab, clas);
        this.diet = diet;
    }
    animalInfoPlusDiet(){
        return super.animalInfo() + '<br>' + this.diet;
    }
}
var animal4 = new NewClassAnimal("Tiger", "Katzen", true, "Jungel", "Säugetier","Carnivore");
var animal5 = new NewClassAnimal("Schlange", "Schlangen", true, "Jungel", "Reptil","Carnivore");
var animal6 = new NewClassAnimal("Eule", "Eulen", true, "Wald", "Vögel","Carnivore");
console.log(animal1.animalInfo()+animal2.animalInfo()+animal3.animalInfo()+animal4.animalInfoPlusDiet()+animal5.animalInfo()+animal6.animalInfo());
document.getElementById("animal").innerHTML = animal1.animalInfo()+animal2.animalInfo()+animal3.animalInfo()+animal4.animalInfoPlusDiet()+animal5.animalInfoPlusDiet()+animal6.animalInfoPlusDiet();




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




class Team {
    sport;
    teamName;
    player;
    position;
    jersey;
    //Naming the parameters like the properties is not necessary!!!
    constructor(sport, teamName, player, position, jersey){
        this.sport = sport;
        this.teamName = teamName;
        this.player = player;
        this.position = position;
        this.jersey = jersey;
    }

    teamInfo(){
        return `<br> ${this.sport} <br> ${this.teamName} <br> ${this.player} <br> ${this.position} <br> ${this.jersey}`
    }
}

class NewClassTeam extends Team {
    mascot;
    constructor (sport, teamName, player, position, jersey, mascot){
        super(sport, teamName, player, position, jersey);
        this.mascot =  mascot;
    }
    teamInfoPlusSponsor(){
        return super.teamInfo() + '<br>' + this.mascot;
    }
}
var team1 = new Team("American Football", "Tampa Bay Buccaneers", "Tom Brady", "Quarterback", "12");
var team2 = new Team("American Football", "Seattle Seahawks", "D.K Metcalf", "Wide Receiver", "14");
var team3 = new Team("American Footbal", "Baltimore Ravens", "Mark Andrews", "Tight End", "89");

var team4 = new NewClassTeam("American Football", "Tampa Bay Buccaneers", "Tom Brady", "Quarterback", "12", "Captain Fear");
var team5 = new NewClassTeam("American Football", "Seattle Seahawks", "D.K Metcalf", "Wide Receiver", "14", "Blitz");
var team6 = new NewClassTeam("American Footbal", "Baltimore Ravens", "Mark Andrews", "Tight End", "89", "Poe");


console.log(team1.teamInfo()+team2.teamInfo()+team3.teamInfo()+team4.teamInfoPlusSponsor()+team5.teamInfoPlusSponsor()+team6.teamInfoPlusSponsor());
document.getElementById("sport").innerHTML = team1.teamInfo()+team2.teamInfo()+team3.teamInfo()+team4.teamInfoPlusSponsor()+team5.teamInfoPlusSponsor()+team6.teamInfoPlusSponsor();



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



class Movies {
    movieName;
    director;
    releaseDate;
    genre;
    star;
    //Naming the parameters like the properties is not necessary!!!
    constructor(movieName, director, releaseDate, genre, star){
        this.movieName = movieName;
        this.director = director;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.star = star;
    }

    movieInfo(){
        return `<br> ${this.movieName} <br> ${this.director} <br> ${this.releaseDate} <br> ${this.genre} <br> ${this.star}`
    }
}

class NewClassMovies extends Movies {
    revenue;
    constructor (movieName, director, releaseDate, genre, star, revenue){
        super(movieName, director, releaseDate, genre, star);
        this.revenue =  revenue;
    }
    movieInfoPlusRevenue(){
        return super.movieInfo() + '<br>' + this.revenue;
    }
}

//movie1 has already the sub-class "newClassMovies" included
var movie1 = new NewClassMovies("Matrix", "Lana & Lili Wachowski", 1999, "Cyperpunk/Science Fiction", "Keanu Reeves", "463.517.383$");

var movie2 = new Movies("Citizen Kane", "Orson Welles", "1949", "Drama", "Orson Welles");
var movie3 = new Movies("Bombshell", "Jay Roach", "2020", "Drama", "Charlize Theron");

console.log(movie1.movieInfoPlusRevenue()+movie2.movieInfo()+movie3.movieInfo());
document.getElementById("movie").innerHTML = movie1.movieInfoPlusRevenue()+movie2.movieInfo()+movie3.movieInfo();


