const inquirer = require("inquirer");
const colors = require("cli-color");

const {
  questions,
  styledQuestions,
  featureQuestions,
  proceedExitQuestions,
} = require("./questions/questions");
const handler = require("./choicesHandler");
const { jsonConcat } = require("./utils/jsonManipulation");

const cliPurple = colors.xterm(13);

async function interactiveCLI() {
  const answers = await inquirer.prompt(questions);
  var nestedAnswer;
  switch (answers.type) {
    case "styled-component":
      nestedAnswer = await inquirer.prompt(styledQuestions);
      break;
    case "feature":
      nestedAnswer = await inquirer.prompt(featureQuestions);
      break;
    default:
      break;
  }
  jsonConcat(answers, nestedAnswer);
  handler(answers);
  console.log("\nSummary: ");
  if (answers.path === "") {
    answers.path = "default";
  }
  console.table(answers);
}

async function proceedOrExit() {
  const answers = await inquirer.prompt(proceedExitQuestions);
  return !(answers.next === "no");
}

async function main() {
  console.clear();
  console.log(cliPurple("Areeba's interactive cli tool."));

  while (true) {
    await interactiveCLI();
    if (!(await proceedOrExit())) {
      break;
    }
  }
}

main();
