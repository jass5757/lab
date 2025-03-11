// Create a person object
let person = {
    name: {
        firstName: "Priyansh",
        lastName: "Thakar"
    },
    age: 16,
    gender: "Male",
    address: "1 Georgian Drive",
    interests: ["swimming", "reading", "dancing"],

    // Method to greet
    greeting: function() {
        alert(`Hello ${this.name.firstName}, How are you?`);
    },

    // Method to display bio
    bio: function() {
        return `The interests of ${this.name.firstName}, of age ${this.age}, living at ${this.address} are ${this.interests.join(", ")}.`;
    }
};

// Access bio and log it to the console
console.log(person.bio());

// Accessing a property using bracket notation
console.log(person["address"]);

// Update the age property
person.age = 80;

// Add new properties to the object
person.eyeColor = "Green"; // Add eye color
person.hairColor = "Black"; // Dynamically set hair color using variable
person.goodbye = function() { // Add goodbye method
    alert(`This is ${this.name.firstName} signing off!`);
};

// Call goodbye method
person.goodbye();

// Creating new person objects with a hello method
let person1 = {
    name: "P1",
    hello: function() {
        alert(`Hello, this is ${this.name}.`);
    }
};

let person2 = {
    name: "P2",
    hello: function() {
        alert(`Hello, this is ${this.name}.`);
    }
};

// Calling the hello method for both person1 and person2
person1.hello();
person2.hello();
