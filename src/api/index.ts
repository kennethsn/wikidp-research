import { storiesServicesAPIIsEnabled } from '../constants';
import chatWikiDPResponse from '../tests/fixtures/chat--sample-response--qgis.json';
import { ChatWikiDPRequest, ChatWikiDPResponse } from '../types';
import sleep from '../utils/sleep';
import { storiesAPIClient } from './client';


export const aiWikibaseChat = async (request: ChatWikiDPRequest): Promise<ChatWikiDPResponse> => {
  if (storiesServicesAPIIsEnabled) {
    return storiesAPIClient.post('ai/wikibase_entity_chat/', request);
  }
  // Mocked Response
  await sleep(3000);
  return chatWikiDPResponse;
}
