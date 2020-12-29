import Service from './Service';

class CommentsService extends Service {
  /**
   * Gets friends list
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async get_comment() {
    try {
      return await this.http.get(`${this.$apiURL}/comments`);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  /**
   * Gets friends list
   * @param {Object} comment
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async add_comment(comment) {
    try {
      return await this.http.post(`${this.$apiURL}/comments`, comment);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  /**
   * Gets friends list
   * @param {Object} comment
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async remove_comment(id) {
    try {
      return await this.http.delete(`${this.$apiURL}/comments/${id}`);
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export default CommentsService;
