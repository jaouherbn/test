class Person {
    firstname;
    lastname;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
     }

    display() {
        console.log(`Le nom est: ${this.firstname} ${this.lastname}`);
    }

}

module.exports = { Person };