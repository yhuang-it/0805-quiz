class Person {
    constructor(firstName, lastName, age) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
    }
    get firstName() {
      return this._firstName;
    }
    get lastName() {
      return this._lastName;
    }
    get age() {
      return this._age;
    }
  };
  
  const person = (firstName, lastName, age) => {
    return {
      firstName,
      lastName,
      age
    }
  };
  
  let clickButton = document.getElementById('submitButton');
  
  function showInfo() {
    let x = document.getElementById("firstName").value;
    let y = document.getElementById("lastName").value;
    let z = document.getElementById("age").value;
     document.getElementById("demo").innerHTML = `Hello, ${x} ${y}! You are ${z} years old.`;
  }
  
  clickButton.addEventListener('click', showInfo);