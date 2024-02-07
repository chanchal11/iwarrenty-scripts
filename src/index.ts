import * as xlsx from 'xlsx';
import {program } from 'commander';
import parseExcel from './parseExcel';

// Define command-line options
program.name('iwarrenty-scripts')
.version('1.0.0')
.description('CLI tool for parsing Excel files and outputting JSON data for iwarrenty-scripts');

program
.command('parse-excel')
.description('Parse Excel file and output JSON data')
.argument('filepath', 'Path to the Excel file')
.action((filePath) => parseExcel(filePath));

// Parse command-line arguments
program.parse(process.argv);

