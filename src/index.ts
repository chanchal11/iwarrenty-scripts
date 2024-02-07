import * as xlsx from 'xlsx';
import {program } from 'commander';
import parseExcel from './parseExcel';

// Define command-line options
program.name('iwarrenty-scripts')
.version('1.0.0')
.description('CLI tool for parsing Excel files and outputting JSON data for iwarrenty-scripts');

program
.option('-f, --filepath <path>', 'Path to the Excel file').action(() => {
    const options = program.opts();
    const filePath = options.filepath;
    if (!filePath) {
        console.error('Please provide the path to the Excel file using --filepath option.');
        process.exit(1);
    }

    parseExcel(filePath);
} );

// Parse command-line arguments
program.parse(process.argv);

