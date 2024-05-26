import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.green.bgMagentaBright("\t\t\t\tQUIZ\t\t\t\t"));
let marks = 0;
let q1 = await inquirer.prompt([
    {
        name: "one",
        type: "list",
        message: "Who was the irst Prime Minister of Islamic Republic Of Pakistan?",
        choices: ["Liaqat Ali Khan", "Quaid e Azam", "Tikka Khan", "Zulfiqar Ali Bhutto"],
    }
]);
if (q1.one == "Liaqat Ali Khan") {
    console.log(chalk.green("Correct Answer!"));
    marks++;
}
else {
    console.log(chalk.red("Incorrect Answer!"));
}
let q2 = await inquirer.prompt([
    {
        name: "two",
        type: "list",
        message: "Which tag is used for links in HTML?",
        choices: ["<a>", "<p>", "<ul", "<q>"],
    }
]);
if (q2.two == "<a>") {
    console.log(chalk.green("Correct Answer!"));
    marks++;
}
else {
    console.log(chalk.red("Incorrect Answer!"));
}
let q3 = await inquirer.prompt([{
        name: "three",
        type: "list",
        message: "Who won the  ICC World Cup 2023?",
        choices: ["Pakistan", "Newzealand", "Australia", "India"],
    }]);
if (q3.three == "Australia") {
    console.log(chalk.green("Correct Answer!"));
    marks++;
}
else {
    console.log(chalk.red("Incorrect Answer!"));
}
let q4 = await inquirer.prompt([{
        name: "four",
        type: "list",
        message: "WHich tag is used to bold the content?",
        choices: ["<p>", "<u>", "<b>", "<a>"],
    }]);
if (q4.four == "<b>") {
    console.log(chalk.green("Correct Answer!"));
    marks++;
}
else {
    console.log(chalk.red("Incorrect Answer!"));
}
let q5 = await inquirer.prompt([{
        name: "five",
        type: "list",
        message: "Which player has most international runs accross all formats in the history of cricket?",
        choices: ["Steve Smith", "Babar Azam", "Suchin Tendulkar", "Virat Kohli"],
    }]);
if (q5.five == "Suchin Tendulkar") {
    console.log(chalk.green("Correct Answer!"));
    marks++;
}
else {
    console.log(chalk.red("Incorrect Answer!"));
}
console.log(chalk.green(`Obtained Marks : ${marks} `));
console.log(chalk.red("Total Marks: 5"));
