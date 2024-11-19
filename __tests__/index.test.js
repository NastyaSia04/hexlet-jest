import reverse from '../src/index.js';
import path from 'path';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse', () => { 
    const text = readFile('entranceData');
    const result = readFile('exitData');
    expect(reverse(text)).toEqual(result);
    expect(reverse('')).toEqual('');
});