class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate){
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    fullName(){
        return this.firstName + " " + this.lastName;
    }
    promote(newJobTitle, newPayRate){
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }
    getIntro(){
        return `Hi! I'm ${this.fullName()} and I am a ${this.jobTitle}`;
    }
}

const employee1 = new Employee( 1, "Ian", "Auston", "Graphic Artist", 42.50);
const employee2 = new Employee( 2, "Hello", "Good", "Success", 142.50);

console.log(`Employee ${employee1.fullName()} created`);

employee1.promote("Sr. Graphic Artist", 46.75);
let intro = employee1.getIntro();
// console.log(intro);
// console.log(`Job title is ${employee1.jobTitle}`);
// console.log(`Pay rate is $${employee1.payRate}`);

// employee2.promote("Big money", 246.75);
// console.log(employee2.getIntro());
// console.log(`Job title is ${employee2.jobTitle}`);
// console.log(`Pay rate is $${employee2.payRate}`);
