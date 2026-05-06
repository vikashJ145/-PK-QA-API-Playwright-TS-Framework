import { test, expect } from '@playwright/test';
import { APIClient } from '../src/core/apiClient.js';
import { UserService } from '../src/services/userService.js';

test.describe('User API Tests', () => {
  let apiClient: APIClient;
  let userService: UserService;

  test.beforeEach(async () => {
    apiClient = new APIClient();
    userService = new UserService(apiClient);
    await userService.init();
  });

  test('Get all users', async () => {
    const response = await userService.getUsers();

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('Number of users:', body.length);
    console.log('Users:', body);
    expect(body.length).toBeGreaterThan(0);
  });

  test('Create user', async () => {
    const payload = {
      name: 'John',
      job: 'QA'
    };

    const response = await userService.createUser(payload);

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe(payload.name);
  });
});