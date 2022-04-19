"use strict";

const { data } = require("./MyMath");

// const fs = require('fs/promises');
// const fs2 = require('fs');
// fs2.promises;

const fs = require("fs").promises;

fs.appendFile("./text.txt", [
    fs.readFile('./.gitignore').then((data) => {return data}),
    '\n',
    fs.readFile('./data.txt').then((data) => {return data}),
    '12345\n',
    'здесь будет eof'
]);

/*
  resolve - этап поиcка модуля
    1 подключаются core modules
    2 - ищется фалй
      2.1 ищется фалй с расширением .js
      2.2 ищется фалй с расширением .json
    3 - ишем папку
      3.1 - package.json -> "main"
      3.2 index.js
      3.3 index.json
    4. - ищем папку node_modules
    5 - кидаем ошибку
  loading - чтение модуля / файла
  wrapping - вы весь файл оборачиваее в функцию, подсовываются 
    require, __dirname, и тд
  evaluation - запускается код в файле
  caching - результат 4 этапа сохраняется и потом отдается в export
*/
