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

## Examples
Run this command on windows -
```powershell
npm run start  --  parse-excel sample.xlsx | Select-String -Pattern 'Miranda'
```
or, following on linux - 
```bash
npm run start  --  parse-excel sample.xlsx | grep Miranda
```
```
{"retailerName":"CANCER COUNCIL MIRANDA","location":{"street":"SHOP 3076 WESTFIELD SHOP/TOWN, THE 
KINGSWAY","city":"Miranda","country":"AU","address":"SHOP 3076 WESTFIELD SHOP/TOWN, THE KINGSWAY MIRANDA  NSW 
2228","lat":-34.035551,"lng":151.100637,"zip":2228,"state":"New South Wales"},"contact":{"phone":"02 9525 
9209","website":"https://www.cancercouncil.com.au/"}}
{"retailerName":"DAVID JONES MIRANDA","location":{"street":"600 THE 
KINGSWAY","city":"Miranda","country":"AU","address":"600 THE KINGSWAY MIRANDA  NSW 
2228","lat":-34.035551,"lng":151.100637,"zip":2228,"state":"New South Wales"},"contact":{"phone":"02 9710 
7111","website":"https://www.davidjones.com/"}}
{"retailerName":"LOWES MIRANDA         ","location":{"street":"WESTFIELD SHOPPING 
CENTRE","city":"Miranda","country":"AU","address":"WESTFIELD SHOPPING CENTRE MIRANDA  NSW 
2228","lat":-34.035551,"lng":151.100637,"zip":2228,"state":"New South Wales"},"contact":{"phone":"02 9525 
6668","website":"https://www.lowes.com.au/"}}
{"retailerName":"MIRANDA MEDICAL CENTRE CHEMIST","location":{"street":"SUITE 1 - 573 
KINGSWAY","city":"Miranda","country":"AU","address":"SUITE 1 - 573 KINGSWAY MIRANDA  NSW 
1490","lat":-34.033475,"lng":151.102255,"zip":2228,"state":"New South Wales"},"contact":{"phone":"02 9531 
2500","website":"https://www.shirecompounding.com.au/"}}
{"retailerName":"MYER MIRANDA","location":{"street":"THE 
KINGSWAY","city":"Miranda","country":"AU","address":"THE KINGSWAY MIRANDA  NSW 
2228","lat":-34.034718,"lng":151.106222,"zip":2228,"state":"New South Wales"},"contact":{"phone":"02 9526 
0111","website":"https://www.myer.com.au/"}}
{"retailerName":"CANCER COUNCIL MIRANDA","location":{"street":"SHOP 3076 WESTFIELD SHOP/TOWN, THE 
KINGSWAY","city":"Miranda","country":"AU","address":"SHOP 3076 WESTFIELD SHOP/TOWN, THE KINGSWAY MIRANDA  NSW 
2228","lat":-34.035551,"lng":151.100637,"zip":2228,"state":"New South Wales"},"contact":{"phone":"02 9525 
9209","website":"https://www.cancercouncil.com.au/"}}
{"retailerName":"DAVID JONES MIRANDA","location":{"street":"600 THE 
KINGSWAY","city":"Miranda","country":"AU","address":"600 THE KINGSWAY MIRANDA  NSW 
2228","lat":-34.035551,"lng":151.100637,"zip":2228,"state":"New South Wales"},"contact":{"phone":"02 9710 
7111","website":"https://www.davidjones.com/"}}
{"retailerName":"LOWES MIRANDA         ","location":{"street":"WESTFIELD SHOPPING 
CENTRE","city":"Miranda","country":"AU","address":"WESTFIELD SHOPPING CENTRE MIRANDA  NSW 
2228","lat":-34.035551,"lng":151.100637,"zip":2228,"state":"New South Wales"},"contact":{"phone":"02 9525 
6668","website":"https://www.lowes.com.au/"}}
{"retailerName":"MIRANDA MEDICAL CENTRE CHEMIST","location":{"street":"SUITE 1 - 573 
KINGSWAY","city":"Miranda","country":"AU","address":"SUITE 1 - 573 KINGSWAY MIRANDA  NSW 
1490","lat":-34.033475,"lng":151.102255,"zip":2228,"state":"New South Wales"},"contact":{"phone":"02 9531 
2500","website":"https://www.shirecompounding.com.au/"}}
{"retailerName":"MYER MIRANDA","location":{"street":"THE 
KINGSWAY","city":"Miranda","country":"AU","address":"THE KINGSWAY MIRANDA  NSW 
2228","lat":-34.034718,"lng":151.106222,"zip":2228,"state":"New South Wales"},"contact":{"phone":"02 9526 
0111","website":"https://www.myer.com.au/"}}
```