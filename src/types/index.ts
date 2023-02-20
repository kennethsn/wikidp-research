export type MultiLingualItemData = Array<{
  primaryLabel: string;
  tables: Array<MultiLingualTable>;
}>
export interface MultiLingualTable {
  color: string;
  data: MultiLingualTableCSVEntry;
  primaryLabel: string;
  source: string;
}
export type MultiLingualTableCSVEntry = Array<MultiLingualTableCSVEntryRow>;
export interface MultiLingualTableCSVEntryRow {
  label: string;
  languageCode: string;
}
