const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHtml = require("./util/generateHtml.js")
const team = []

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your manager?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email address of your manager?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee ID of your manager?',
    },
])
.then((ans) => {team.push (new Manager(ans.name,ans.id,ans.email,ans.officeNumber))
  getTeam()})

function getTeam() {
  inquirer
.prompt([
  {
     type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices:["Add an Intern", "Add an Engineer", "Quit"]
   }]).then((ans) =>{
      if(ans.choice==='Add an Engineer'){
          addEngineer()
      } else if (ans.choice==='Add an Intern') {
          addIntern()
      } else {
          fs.writeFile('generatedteam.html', generateHtml(team), err=>err?console.log(err):"");
      }
  })
}

function addIntern(){
  inquirer
.prompt([
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's employee ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email address?",
  },
  {
      type: "input",
      name: "school",
      message: "What school did the intern attend?",
  },
])
.then((ans) => {team.push (new Intern(ans.name,ans.id,ans.email,ans.school))
  getTeam()})
}

function addEngineer(){
  inquirer
.prompt([
  {
    type: "input",
    name: "name",
    message: "What is the Engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Engineer's employee ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Engineer's email address?",
  },
  {
      type: "input",
      name: "github",
      message: "What is the Engineer's GitHub Username?",
  },
])
.then((ans) => { team.push (new Engineer(ans.name,ans.id,ans.email,ans.github))
  getTeam()})}