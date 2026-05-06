import { request } from '@playwright/test';
import type { APIRequestContext } from '@playwright/test';
import { ENV } from '../config/env.js';

export class APIClient {
  private context!: APIRequestContext;

  async init(baseURL?: string) {
    this.context = await request.newContext({
      baseURL: baseURL || ENV.BASE_URL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json'
      }
    });
  }

  async get(url: string, params?: any) {
    return await this.context.get(url, { params });
  }

  async post(url: string, data?: any) {
    return await this.context.post(url, { data });
  }

  async put(url: string, data?: any) {
    return await this.context.put(url, { data });
  }

  async delete(url: string) {
    return await this.context.delete(url);
  }
}