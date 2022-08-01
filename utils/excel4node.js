import fs from 'fs'
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import xl from 'excel4node'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function makeThreeLiner() {
  const filePath = join(__dirname, 'data.md');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('НАШ ВЫВОД ОШИБКИ', err);
      return;
    }
    let lines = data.split(String.fromCharCode(10));
    lines = lines.map((line) => {
      const lineParts = line.split(', ')
      lineParts[2] = lineParts[2].replace('\r', '')
      return lineParts;
    })
    const analysis = lines.every((line) => line.length === 3)
    const wb = new xl.Workbook();
    const ws = wb.addWorksheet('Sheet 1');
    lines.forEach((line, index) => {
      let [flatType, square, floor] = line;
      ws.cell(index + 1, 1).string(flatType);
      ws.cell(index + 1, 2).string(square);
      ws.cell(index + 1, 3).string(floor);
      wb.write(path.join(__dirname, 'output.xlsx'));
    })
    // console.log(lines);
    console.log('Все строки содержат по 3 элемента:', analysis ? 'да' : 'НЕТ! Проверь входные данные или доработай парсер.');
    console.log('Строк:', lines.length);
  });
}

module.exports = { makeThreeLiner }
