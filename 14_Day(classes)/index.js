// Activity 1: Class Definition

// Define a class `Person` with properties 'name' and 'age' and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  // Add a method to the "Person" class that updates the age property and logs the updated age.
  Person.prototype.updateAge = function (age) {
    this.age = age;
    console.log(`My age is ${this.age}`);
  };
  
  const person = new Person("Bittu", 21);
  console.log(person.greeting());
  person.updateAge(22);
  
  // Activity 2: Class Inheritance
  
  // Define a class 'Student' that extends the `Person` class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student id.
  class Student extends Person {
    static totalStudents = 0; // Corrected property name
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student.totalStudents += 1; // Incrementing the static property
    }
    getStudentId() {
      return this.studentId;
    }
  
    // Override the greeting method in the `Student` class to include ID in the message.
    greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old and my student ID is ${this.studentId}.`;
    }
  }
  
  const student = new Student("Bittu", 21, 1234);
  console.log(student.getStudentId());
  console.log(student.greeting());
  
  // Activity 3: Static Method and Properties
  
  // Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
  Person.staticGreeting = function () {
    return "Hello, I am a generic greeting message.";
  };
  console.log(Person.staticGreeting());
  
  // Log the total number of students created
  console.log(Student.totalStudents); // Corrected the property name
  
  // Activity 4: Getters and Setters
  
  // Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
  class Person1 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = new Person1("Bittu", "Kumar");
  console.log(person1.fullName);
  
  // Add a setter method to the Person class to update the name properties (first name and last name). Update the name using the setter and log the updated full name.
  class Person2 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = new Person2("Bittu", "Kumar");
  console.log(person2.fullName);
  person2.fullName = "Bittu Jay";
  console.log(person2.fullName);
  
  // Activity 5: Private Fields
  
  // Define a class `Account` with private fields for balance and methods to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
  class Account {
    #balance = 0;
    constructor(balance) {
      this.#balance = balance;
    }
    getBalance() {
      return this.#balance;
    }
    deposit(amount) {
      this.#balance += amount;
      return this.#balance;
    }
    withdraw(amount) {
      if (amount > this.#balance) {
        return "Insufficient funds";
      } else {
        this.#balance -= amount;
        return this.#balance;
      }
    }
  }
  
  // Create an instance of the Account class and test deposit and withdraw methods, logging the balance after each operation.
  const myAccount = new Account(1000);
  console.log(myAccount.getBalance()); // Initial balance
  myAccount.deposit(500); // Deposit money
  console.log(myAccount.getBalance()); // Log balance after deposit
  myAccount.withdraw(300); // Withdraw money
  console.log(myAccount.getBalance()); // Log balance after withdrawal
  myAccount.withdraw(1300); // Attempt to withdraw more than the balance
  console.log(myAccount.getBalance()); // Log balance after failed withdrawal
  