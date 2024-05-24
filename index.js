#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const person = new Person();
const programStart = async (person) => {
    console.log(chalk.bold.green(`\t<<< Welcome To My OOP Project >>> `));
    do {
        const { select } = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Which person do you want to talk to or exit?",
            choices: ["Teacher", "Student", "Exit"]
        });
        if (select === "Teacher") {
            console.log(chalk.green(`You are chatting with Teacher`));
            console.log(chalk.yellow("Hope you are doing well!"));
        }
        if (select === "Student") {
            const { student } = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which student do you want to talk?"
            });
            let selectedStudent = person.students.find((value) => value.name === student);
            if (!selectedStudent) {
                selectedStudent = new Student(student);
                person.addStudent(selectedStudent);
                console.log(chalk.yellow(`I am ${chalk.bold.cyan(selectedStudent.name)}, and I'm good.`));
            }
            else {
                console.log(chalk.yellow(`I am ${chalk.bold.green(selectedStudent.name)}, and I'm doing well.`));
            }
        }
        // If user chooses Exit
        if (select === "Exit") {
            console.log(chalk.bold.magenta("Goodbye!"));
            process.exit();
        }
    } while (true);
};
programStart(person);
