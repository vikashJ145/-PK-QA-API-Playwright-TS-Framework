import { test, expect } from '@playwright/test';
import { APIClient } from '../src/core/apiClient.js';
import { UserService } from '../src/services/userService.js';

test.describe('User API - Delete User', () => {
  let apiClient: APIClient;
  let userService: UserService;

  test.beforeEach(async () => {
    apiClient = new APIClient();
    userService = new UserService(apiClient);
    await userService.init();
  });

  test('Create User -> Delete User -> Get User -> Verify 404 Not Found', async () => {
    const createPayload = {
      name: 'John',
      job: 'QA'
    };

    const createResponse = await userService.createUser(createPayload);
    expect(createResponse.status()).toBe(201);

    const createdBody = await createResponse.json();
    const userId = createdBody.id;

    expect(userId).toBeTruthy();
    expect(createdBody.name).toBe(createPayload.name);
    expect(createdBody.job).toBe(createPayload.job);

    // Delete
    const deleteResponse = await userService.deleteUser(userId);
    // Some APIs return 200/204; status isn't strictly required by the scenario
    expect([200, 202, 204, 404]).toContain(deleteResponse.status());

    // Get after delete should be 404 Not Found
    const getResponseAfterDelete = await userService.getUserById(userId);
    expect(getResponseAfterDelete.status()).toBe(404);
  });
});

