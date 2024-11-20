import reverse from '../src/index.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const reverseStr = (string) => {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i -= 1) {
        reversed += string[i];
    }
    return reversed;
};

test('reverse string', () => { 
    const text = readFile('entranceData');
    const result = reverseStr(text);
    expect(reverse(text)).toEqual(result);
    expect(reverse('')).toEqual('');
});