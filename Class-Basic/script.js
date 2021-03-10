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



console.log(animal1.animalInfo()+animal2.animalInfo()+animal3.animalInfo());
document.getElementById("animal").innerHTML = animal1.animalInfo()+animal2.animalInfo()+animal3.animalInfo();

class Team {
    sport;
    teamName;
    player;
    position;
    jersey;

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

var team1 = new Team("American Football", "Tampa Bay Buccaneers", "Tom Brady", "Quarterback", "12");
var team2 = new Team("American Football", "Seattle Seahawks", "D.K Metcalf", "Wide Receiver", "14");
var team3 = new Team("American Footbal", "Baltimore Ravens", "Mark Andrews", "Tight End", "89");

console.log(team1.teamInfo()+team2.teamInfo()+team3.teamInfo());
document.getElementById("sport").innerHTML = team1.teamInfo()+team2.teamInfo()+team3.teamInfo();

class Movies {
    movieName;
    director;
    releaseDate;
    genre;
    star;

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

var movie1 = new Movies("Matrix", "Lana & Lili Wachowski", 1999, "Cyperpunk/Science Fiction", "Keanu Reeves")
var movie2 = new Movies("Citizen Kane", "Orson Welles", "1949", "Drama", "Orson Welles");
var movie3 = new Movies("Bombshell", "Jay Roach", "2020", "Drama", "Charlize Theron");

console.log(movie1.movieInfo()+movie2.movieInfo()+movie3.movieInfo());
document.getElementById("movie").innerHTML = movie1.movieInfo()+movie2.movieInfo()+movie3.movieInfo();
