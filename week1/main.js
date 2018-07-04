class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
        this.star = [];
        this.writer = [];
    }

    getTitle() {
        return this.title;
    }

    getDirector() {
        return new StaffMember(this.director);
    }

    addStar(star) {
        this.star.push(star);
    }                                                                                                                                                                                                   

    getStars() {
        return this.star;
    }

    addWriter(writer) {
        this.writer.push(writer);
    }

    getWriters() {
        return this.writer;
    }

    addRating(rating) {
        this.rating = rating;
    }

    getAverageRating() {
        return this.rating;
    }
}

class StaffMember {
    constructor(name, role, dateOfBirth) {
      this.name = name;
      this.role = role;
      this.dateOfBirth = dateOfBirth;
      this.movie =[];
    }
  
    addMovie(movie) {
      this.movie.append(movie);
    }
  
    getName() {
      return this.name;
    }
  
    getRole() {
      return this.role;
    }
  
    getAge() {
      return this.dateOfBirth;
    }
}

const myMovie = new Movie('spiderman', 'Sam Raimi');

// create and add staff members
const firstActor = new StaffMember('Tobey A', 'Peter A', 'June 27 1975');
const secontActor = new StaffMember('Tobey B', 'Peter B', 'June 28 1975');
const thirdActor = new StaffMember('Tobey C', 'Peter C', 'June 29 1975');
myMovie.addStar(firstActor);
myMovie.addStar(secontActor);
myMovie.addStar(thirdActor);

// console
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director.getName()}`);

let div = document.querySelector('div');
myMovie.getStars().map(actor => div.innerHTML += `${actor.getName()} ${actor.getAge()} <br>`);

