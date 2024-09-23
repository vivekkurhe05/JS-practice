const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  Object.freeze(person)

  person.age = 31
  console.log(person)