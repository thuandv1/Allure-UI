require("dotenv").config({ path: "./.env" });
const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const TAB_SIZE = 2;
const START_ROW = 2;
const COL_FILE_NAME = "Module";
const COL_KEY = "Key";
const COL_JP = "JP";
const COL_EN = "EN";
const COL_CH = "CH";
const COL_DE = "DE";
const COL_FR = "FR";

function transform(sheet, row, index) {
  const fileName = row[COL_FILE_NAME];
  const key = row[COL_KEY];
  const jp = row[COL_JP] || "";
  const en = row[COL_EN] || "";
  const ch = row[COL_CH] || "";
  const de = row[COL_DE] || "";
  const fr = row[COL_FR] || "";
  const error = (errorAt) =>
    new Error(
      `[Sheet: ${sheet}, Row: ${
        index + START_ROW
      }, Column: ${errorAt}] Must not be empty`
    );

  switch (true) {
    case !fileName && !key && !jp && !en && !ch:
      return [];
    case !key:
      throw error(COL_KEY);
    case !fileName:
      throw error(COL_FILE_NAME);
    case !jp:
      throw error(COL_JP);
    case !en:
      throw error(COL_EN);
    case !ch:
      throw error(COL_CH);
    case !de:
      throw error(COL_CH);
    case !fr:
      throw error(COL_CH);
    default:
      return [fileName, key, jp, en, ch, de, fr];
  }
}

function getArgv() {
  const input = process.env.I18N_INPUT;
  const output = process.env.I18N_OUTPUT;
  const sheets = (process.env.I18N_SHEETS || "").split(",");

  if (!input) {
    throw new Error("Please enter the path to the xlsx file with I18N_INPUT");
  }
  if (!output) {
    throw new Error("Please enter the path to the output dir with I18N_OUTPUT");
  }
  if (!sheets) {
    throw new Error("Please enter the list of sheet with I18N_SHEETS");
  }

  return { input, output, sheets };
}

function createJsonFiles(output, fileName, jsonData) {
  const { jp, en, ch, de, fr } = jsonData;
  const jpFilePath = path.resolve(output, "jp", `${fileName}.json`);
  const enFilePath = path.resolve(output, "en", `${fileName}.json`);
  const chFilePath = path.resolve(output, "ch", `${fileName}.json`);
  const deFilePath = path.resolve(output, "de", `${fileName}.json`);
  const frFilePath = path.resolve(output, "fr", `${fileName}.json`);
  fs.writeFile(
    jpFilePath,
    `${JSON.stringify(jp, null, TAB_SIZE)}\n`,
    (error) => {
      if (error) {
        throw error;
      }
      console.log(`Completed: ${jpFilePath}`);
    }
  );
  fs.writeFile(
    enFilePath,
    `${JSON.stringify(en, null, TAB_SIZE)}\n`,
    (error) => {
      if (error) {
        throw error;
      }
      console.log(`Completed: ${enFilePath}`);
    }
  );
  fs.writeFile(
    chFilePath,
    `${JSON.stringify(ch, null, TAB_SIZE)}\n`,
    (error) => {
      if (error) {
        throw error;
      }
      console.log(`Completed: ${chFilePath}`);
    }
  );
  fs.writeFile(
    deFilePath,
    `${JSON.stringify(de, null, TAB_SIZE)}\n`,
    (error) => {
      if (error) {
        throw error;
      }
      console.log(`Completed: ${deFilePath}`);
    }
  );
  fs.writeFile(
    frFilePath,
    `${JSON.stringify(fr, null, TAB_SIZE)}\n`,
    (error) => {
      if (error) {
        throw error;
      }
      console.log(`Completed: ${frFilePath}`);
    }
  );
}

function convert() {
  const { input, output, sheets } = getArgv();
  const workbook = xlsx.readFile(input, { sheets });
  const jsonData = {};

  Object.keys(workbook.Sheets).forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet, { blankrows: true });

    for (let i = 0; i < rows.length; i += 1) {
      const row = rows[i];
      const [fileName, key, jp, en, ch, de, fr] = transform(sheetName, row, i);

      if (fileName) {
        jsonData[fileName] = jsonData[fileName] || {
          jp: {},
          en: {},
          ch: {},
          de: {},
          fr: {}
        };
        jsonData[fileName].jp[key] = jp;
        jsonData[fileName].en[key] = en;
        jsonData[fileName].ch[key] = ch;
        jsonData[fileName].de[key] = de;
        jsonData[fileName].fr[key] = fr;
      }
    }
  });

  Object.keys(jsonData).forEach((fileName) => {
    createJsonFiles(output, fileName, jsonData[fileName]);
  });
}

convert();
