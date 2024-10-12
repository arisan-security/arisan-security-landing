import fs from "fs";
import path from "path";

export const saveDataToFile = (data: any) => {
  const dataDir = path.resolve(process.cwd(), "src", "data");
  const filePath = path.join(dataDir, "rapidApiData.json");

  // Ensure the data directory exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

export const readDataFromFile = () => {
  const filePath = path.resolve(process.cwd(), "src", "data", "rapidApiData.json");
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContent);
  }
  return null;
};