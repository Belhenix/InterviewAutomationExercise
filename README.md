# InterviewAutomationExercise
Automation exercise for an Experian interview. 

The goal is to use Playwright using Typescript to access a specific webpage, fill a form and assert we have been redirected to another specific webpage at the end.

## Requirements
* Internet connection
* [Node.js and npm latest version](https://nodejs.org/en/download/package-manager/current)

## Installation

1. Download the project source code by clicking the green <>Code button and either cloning using git or clicking the Download ZIP options ([or click here](https://github.com/Belhenix/InterviewAutomationExercise/archive/refs/heads/master.zip)).
2. Move to the downloaded project. If the ZIP file option was chosen, extract its content.
3. Open the BAT file `SETUP.BAT` and press enter when asked for anything until it asks to close the window. It will last a while depending on the internet connection. Alternatively, you can open a command line interface in the chosen directory and execute the command `npm init playwright@latest` and follow the same instructions minus the window closing.

## Instructions of Usage

1. Open the BAT file `RUNTEST.BAT`. It will close after it's finished. Alternatively, you can open a command line interface in the chosen directory and execute the command `npx playwright test experiantest.spec` to run the test.
2. Open the other BAT file `VIEWTESTRESULTS.BAT`, it will provide a link to view the test results. If the command line was used, you will automatically get the link or alternatively you can execute the command `npx playwright show-report` to get it again.
