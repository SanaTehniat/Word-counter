#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let answers: {
    sentence : string
} = await inquirer.prompt([
    {
      name: "sentence",
      type: "input",
      message: (chalk.magentaBright.italic("Enter your sentence to count the word: "))
    }
])

let words = (answers.sentence.trim().split(" "))


console.log(words);

console.log(chalk.blueBright.bold(`your sentence word count is ${words.length}`))

