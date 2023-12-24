import path from "path";
import fs from "fs";
import { Request, Response } from "express";

// Функция, читающая данные из файла по указанному пути
const readDataFromFile = (filePath: string): any | null => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data from file:', error);
        return null;
    }
};

// Функция-обработчик запроса для получения данных из файла
const getDataFromPath = (filePath: string) => (req: Request, res: Response) => {
    const mockData = readDataFromFile(filePath) || {};
    res.json(mockData);
};

const userLevelPath = path.join(__dirname, '../data/layout/userLevel.json');
const layoutDataPath =  path.join(__dirname, '../data/layout/layoutData.json');
const navigationPagesPath = path.join(__dirname, '../data/layout/navigationPages.json');
export const userLevelData = getDataFromPath(userLevelPath);
export const layoutData = getDataFromPath(layoutDataPath);
export const navigationPages = getDataFromPath(navigationPagesPath);