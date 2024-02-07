# iwarrenty-scripts

This project contains scripts for the iWarranty system, providing utilities to parse Excel files and perform various tasks.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/chanchal11/iwarrenty-scripts.git
cd iwarrenty-scripts
npm install
tsc src/index.ts
node src/index.js parse-excel sample.xlsx
```
## npm scripts
 To run the scripts for the iWarranty system, you can use the following npm commands:

 - `npm run build`: Compiles the TypeScript files in the `src` directory to JavaScript.
 - `npm run sample-run`: Compiles the TypeScript files and then runs the script with a sample Excel file.
 - `npm run get-help`: Compiles the TypeScript files and then displays help information for using the script.
 - `npm run test`: Runs the test suite for the project (currently not specified).
 - `npm run start -- parse-excel <path-to-file.xlsx>`: Compiles the TypeScript files and then runs the script with an Excel file provided as file path. 

 Each script is designed to facilitate specific operations within the iWarranty system. To execute any of the scripts, make sure you are in the project root directory and type the command associated with the script you want to run.
