const inquirer = require('inquirer');


const promptUser = () => {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!')
                    }

                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter you Github Username',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!')
                    }

                }
            },
            {
                type: 'confirm',
                name: 'confirmAbout',
                message: 'Would you like to enter some information about yourself for an "about" section?',
                default: true

            },
            {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself:',
                when: ({ confirmAbout }) => {
                    if (confirmAbout) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ]);
};

promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
    //I if there's no 'projects array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
        =================
        Add A New Project
        =================
        `);
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of the project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!')
                }

            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!')
                }

            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!')
                }

            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]);

};
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });



// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// const [name, github] = profileDataArgs;


// fs.writeFile('index.html', generatePage(name, github), err => {
//    if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!')
// });