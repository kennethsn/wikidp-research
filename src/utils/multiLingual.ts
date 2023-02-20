import { MULTILINGUAL_FILES } from '../constants';
import { MultiLingualTable } from '../types';
import { randomColor } from './color';
import { parseCSV } from './csv';

export const fetchMultiLingualData = async () => {
  const output: Record<string, MultiLingualTable[]> = {};
  await Promise.all(MULTILINGUAL_FILES.map(async (fileName) => {
    const file = await (await fetch(`data/multilingual/${fileName}`)).text();
    const [rawName, rawSource] = fileName.split('__');
    const name = rawName.replaceAll('_', ' ');
    const source = rawSource.replace('.csv', '').replaceAll('_', ' ');
    const table: MultiLingualTable = {
      color: randomColor(),
      data: parseCSV(file) as unknown as MultiLingualTable['data'],
      primaryLabel: name,
      source,
    };
    if (output[name]) {
      output[name].push(table);
    } else {
      output[name] = [table];
    }
  }));
  return Object.entries(output).map(([primaryLabel, tables]) => ({ primaryLabel, tables }));
};
