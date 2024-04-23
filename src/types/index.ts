export type ChatAgent = 'ai' | 'human';

export type ChatHistory = Array<ChatHistoryItem>;

export interface ChatHistoryItem {
  agent: ChatAgent;
  annotations?: Array<TextAnnotation>;
  message: string;
}

export interface ChatWikiDPPropertyInstruction {
  prompt: string;
  property_id: string;
}

export interface ChatWikiDPRequest {
  api_key: string;
  domain: string;
  entity_id?: string;
  history: ChatHistory;
  message: string;
  property_instructions?: Array<ChatWikiDPPropertyInstruction>;
}

export interface ChatWikiDPResponse {
  annotations: Array<TextAnnotation>;
  entity: WikibaseEntity;
  message: string;
}

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

type NullableString = string | null;

export interface TextAnnotation {
  content: string;
  size: number;
  sources: Array<TextAnnotationSource>;
  start: number;
  stop: number;
}

export interface TextAnnotationReference {
  property: {
    id: string;
  };
  value: {
    description?: NullableString;
    label: string;
  };
}

export interface TextAnnotationSource {
  description?: NullableString;
  property_id: string;
  property_label: string;
  values: Array<TextAnnotationSourceValue>;
  wikibase_url: string;
}

export interface TextAnnotationSourceValue {
  description?: NullableString;
  label: string;
  references: Array<TextAnnotationReference>;
};

export interface WikibaseEntity {
  aliases: Array<string>;
  description?: string;
  id: string;
  image?: string;
  label: string;
  logo?: string;
  wikibase_url: string;
}
