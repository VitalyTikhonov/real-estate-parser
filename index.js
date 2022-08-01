import ExcelJS from 'exceljs'
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import fs from 'fs'
import { logLabeled } from './utils/index.js'
import { sourcePropNameMap } from './configs/datasets.js'
import { processData } from './processing/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFolderPath = 'input';
const getFirstFileName = () => fs.readdirSync(`./${inputFolderPath}`)[0];

function throwDataSetChangeError() {
  throw 'Набор полей в исходных данных изменился! Требуется скорректировать парсинг.'
}

function writeXLSX(data) {
}

async function readXLSX() {
  try {
    const workbook = new ExcelJS.Workbook();
    const filename = join(__dirname, inputFolderPath, getFirstFileName());
    const readResult = await workbook.xlsx.readFile(filename);
    const foundSheet = readResult._worksheets[1];

    // const data = sheet._rows.map((row) => row._cells.map((cell) => cell._value.value)) // в простой массив массивов

    /* Сравнить ярлыки из входных данных со словарем по набору и порядку */
    const foundLabels = foundSheet._rows[0]._cells.map((cell) => cell._value.value)
    if (foundLabels.length !== sourcePropNameMap.length) throwDataSetChangeError()
    foundLabels.every((label, index) => {
      const mappingByOrder = sourcePropNameMap[index]
      if (mappingByOrder[0] === label) {
        return true
      }
      throwDataSetChangeError()
    })

    const data = foundSheet._rows.reduce((result, row, rowIndex) => {
      if (rowIndex >= 1) {
        const flat = {}
        row._cells.map((cell, index) => {
          flat[sourcePropNameMap[index][1]] = cell._value.value
        })
        result.push(flat)
      }
      return result
    }, [])
    
    const dataProcessed = processData(data);
    const depositStart = data[3].price.indexOf('Залог - ') + 'Залог -'.length
    const depositEnd = data[3].price.indexOf(' руб.', depositStart)

    logLabeled(
      // 'sheet', sheet,
      // 'Object.keys _rows[0]', Object.keys(sheet._rows[0]),
      // 'Object.keys columns[0]', Object.keys(sheet._columns[0]),
      // 'Object.keys _cells[0]', Object.keys(sheet._rows[0]._cells[0]),
      // 'rows _cells[0] value', sheet._rows[0]._cells[0]._value.value,
      // 'inputPropLabels', foundLabels,
      // 'propNameMap', propNameMap,
      // 'props', props
      'data[]', data[3],
      // 'depositStart', data[3].price.indexOf('Залог - ') + 'Залог -'.length,
      // 'depositEnd', data[3].price.indexOf(' руб.', depositStart),
      // 'data[]', Number(data[3].price.substring(depositStart, depositEnd)),
      // 'data[]', /мармелад/i.test(data[3].description),
      'dataProcessed[]', dataProcessed[3]
    );

    // const sheet = workbook.addWorksheet('ДАННЫЕ', { views: [{ state: 'frozen', xSplit: 0, ySplit: 1 }] });
  } catch (error) {
    logLabeled('error', error);
  }
}

readXLSX();
