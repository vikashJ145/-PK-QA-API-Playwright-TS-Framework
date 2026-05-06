import { BaseService } from '../core/baseService.js';

export class UserService extends BaseService {

  async getUsers() {
    return await this.api.get('/users');
  }

  async getUserById(id: number) {
    return await this.api.get(`/users/${id}`);
  }

  async createUser(payload: any) {
    return await this.api.post('/users', payload);
  }
}