function skillsMember()  {
    var skills = {
        name: "John",
        age: 25,
        skills: ["HTML", "CSS", "JS"],
        greet: function() {
            console.log("Hello, I am " + this.name + " and I am " + this.age + " years old.");
        }
    };
    skills.greet();
    console.log("My skills are: " + skills.skills.join(", "));
    console.log("My first skill is: " + skills.skills[0]);
    console.log("My second skill is: " + skills.skills[1]);
    console.log("My third skill is: " + skills.skills[2]);
}