import Service from './Service';

class UsersService extends Service {
  /**
   * Gets friends list
   * @param {Array} users
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async get_users() {
    try {
      return await this.http.get(`${this.$apiURL}/users`);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  /**
   * Gets friends list
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async get_user(user_id) {
    try {
      return await this.http.get(`${this.$apiURL}/users/${user_id}`);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  /**
   * Gets friends list
   * @param {Object} user
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async user_add_info(user) {
    try {
      return await this.http.post(`${this.$apiURL}/users`, user);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  /**
   * Gets friends list
   * @param {Object} user
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async edit_user_info(user) {
    console.log(444, user);
    try {
      return await this.http.put(`${this.$apiURL}/users/${user.id}`, user);
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export default UsersService;
