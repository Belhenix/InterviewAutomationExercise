# InterviewAutomationExercise
Automation exercise for an Experian interview. 

The goal is to use Playwright using Typescript to access a specific webpage, fill a form and assert we have been redirected to another specific webpage at the end.

## Requirements
* Internet connection
* [Node.js and npm latest version](https://nodejs.org/en/download/package-manager/current)

## Instructions of Usage

1. Download the project source code by clicking the [<>Code](#:R55ab:) button and either cloning using git or clicking the Download ZIP options ([or click here](https://github.com/Belhenix/InterviewAutomationExercise/archive/refs/heads/master.zip)).
2. Move to the downloaded project. If the ZIP file option was chosen, extract its content.
3. Open a command line interface in the chosen directory and execute the command `npx playwright test experiantest.spec` to run the tests. As an alternative you can double click the BAT file `RUNTEST.BAT`
4. Once the test execution command finishes, it will provide a link to view the test results. If the link doesn't show, you can execute the command `npx playwright show-report` to get said link or use the another BAT file named `VIEWTESTRESULTS.BAT`
