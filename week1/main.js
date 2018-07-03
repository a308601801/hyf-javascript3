class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
    }

    getTitle() {
        return this.title;
    }

    getDirector() {
        return new StaffMember(this.director);
    }

    addStar(star) {
        if (this.star === undefined) {
            this.star = [];
            this.star.push(star);
        } else {
            this.star.push(star);
        }
    }                                                                                                                                                                                                   

    getStars() {
        return this.star;
    }

    addWriter(writer) {
        this.writer = writer;
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
    }
  
    addMovie(movie) {
      this.movie = movie;
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

let content = myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()} <br>`);

document.querySelector('div').innerHTML = content
