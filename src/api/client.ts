import axios from 'axios';

import { STORIES_SERVICES_API_BASE_URL } from '../constants';


interface APIClientSettings {
  baseURL: string;
}

export const buildAPIClient = ({ baseURL }: APIClientSettings) => {
  const client = axios.create({
    baseURL: `${baseURL}/api/`,
    responseType: 'json',
  });
  client.interceptors.response.use(({ data }) => data);
  return client;
}

export const storiesAPIClient = buildAPIClient({ baseURL: STORIES_SERVICES_API_BASE_URL })
