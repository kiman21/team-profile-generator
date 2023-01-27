const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const { identity } = require('rxjs');

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">My Team</header>
  <div class="container">
      <h1 class="display-4">${name}</h1>
      <p class="role">${id}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">${github,officeNumber,school}</li>
      </ul>
    </div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your role?',
    },
])
    if (id.answer=="manager") {
        inquirer.prompt({
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
          },)
    }
    if (id.answer=="engineer") {
        inquirer.prompt({
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',
          },)
    }
    if (id.answer=="intern") {
        inquirer.prompt({
            type: 'input',
            name: 'school',
            message: 'What school do you attend?',
          },)
    }
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

