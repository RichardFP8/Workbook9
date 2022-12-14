class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}
class Employee extends Person{
    constructor(firstName, lastName , id, jobTitle, payRate){
        super(firstName, lastName);
        this.emplyeeId = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    // getFullName(){
    //     return this.firstName + " " + this.lastName;
    // }
    getGrossPay(hoursWorked){
        return (this.payRate * hoursWorked).toFixed(2);
    }
}

const juan = new Person("Juan", "Pablo Gutierrez"); //person object
const employee1 = new Employee("Jose", "Santos", 3, "Certified Loko", 84.43);
const employee2 = new Employee("Pablo", "Gonzalez", 5, "El Gavilan", 93);
// console.log(juan.getFullName());

console.log(employee1.getFullName() + " got payed $" + employee1.getGrossPay(34) + " working as a " + employee1.jobTitle);
console.log(employee2.getFullName() + " got payed $" + employee2.getGrossPay(56) + " working as " + employee2.jobTitle);