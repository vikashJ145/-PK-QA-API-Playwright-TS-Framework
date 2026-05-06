import { APIClient } from './apiClient.js';

export class BaseService {
  protected api: APIClient;

  constructor(apiClient: APIClient) {
    this.api = apiClient;
  }

  async init(baseURL?: string) {
    await this.api.init(baseURL);
  }
}