import { ChatAgent, ChatHistory, ChatHistoryItem } from '../types';

export const buildAPIChatHistory = (history: ChatHistory) => (
  history.map(({ annotations, ...rest }) => rest)
);

export const isAIMessage = (item: ChatHistoryItem) => isAgent(item, 'ai');

export const isAgent = ({ agent }: ChatHistoryItem, compare: ChatAgent) => agent === compare;

export const isUserMessage = (item: ChatHistoryItem) => isAgent(item, 'human');