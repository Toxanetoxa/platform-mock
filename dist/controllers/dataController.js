// import fs from 'fs';
// import path from 'path';
// import { Request, Response } from 'express';
//
// const dataFilePath = path.join(__dirname, '../data/data.json');
//
// const readDataFromFile = (): any => {
//     try {
//         const data = fs.readFileSync(dataFilePath, 'utf-8');
//         return JSON.parse(data);
//     } catch (error) {
//         console.error('Error reading data from file:', error);
//         return null;
//     }
// };
//
// const writeDataToFile = (data: any): void => {
//     try {
//         fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
//     } catch (error) {
//         console.error('Error writing data to file:', error);
//     }
// };
//
// export const getData = (req: Request, res: Response) => {
//     const mockData = readDataFromFile() || { users: [] };
//     res.json(mockData);
// };
//
// export const postData = (req: Request, res: Response) => {
//     const newData = req.body;
//     const currentData = readDataFromFile() || { users: [] };
//
//     currentData.users.push(newData);
//     writeDataToFile(currentData);
//
//     res.json({ message: 'POST request received' });
// };
//# sourceMappingURL=dataController.js.map