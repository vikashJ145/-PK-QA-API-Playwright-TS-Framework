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

  async updateUser(id: number, payload: any) {
    return await this.api.put(`/users/${id}`, payload);
  }

  async deleteUser(id: number) {
    return await this.api.delete(`/users/${id}`);
  }
}
