import * as xlsx from 'xlsx';

// Function to read the Excel file and parse its contents
export default function parseExcel(filePath: string): void {
    try {
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = xlsx.utils.sheet_to_json(sheet);

        // Process each row and output as JSON line
        jsonData.forEach((row: any) => {
            // Modify the data as per your schema
            const indexEntry = {
                retailerName: row['content_post_title'],
                location: {
                    street: row['directory_location__street'],
                    city: row['directory_location__city'],
                    country: row['directory_location__country'],
                    address: row['directory_location__address'],
                    lat: row['directory_location__lat'],
                    lng: row['directory_location__lng'],
                    zip: row['directory_location__zip'],
                    state: row['directory_location__state']
                },
                contact: {
                    email: row['directory_contact__email'],
                    fax: row['directory_contact__fax'],
                    mobile: row['directory_contact__mobile'],
                    phone: row['directory_contact__phone'],
                    website: row['directory_contact__website']
                }
            };

            // Output JSON line to console
            console.log(JSON.stringify(indexEntry));
        });        
        } catch (error) {
            console.error(error.message);            
        }
}
