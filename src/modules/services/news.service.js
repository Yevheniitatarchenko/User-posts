import Service from './Service';

class NewsService extends Service {
  /**
   * Gets friends list
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async get_news() {
    try {
      return await this.http.get(`${this.$apiURL}/posts`);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  /**
   * Gets friends list
   * @param {Object} news
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async add_new(news) {
    try {
      return await this.http.post(`${this.$apiURL}/posts`, news);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  /**
   * Gets friends list
   * @param {Object} news
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async edit_new(news) {
    // console.log(news);
    try {
      return await this.http.put(`${this.$apiURL}/posts/${news.id}`, news);
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export default NewsService;
