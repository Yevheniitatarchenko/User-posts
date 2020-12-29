import _ from 'lodash';
import axios from 'axios';

class Service {
  constructor() {
    this.lodash = _;
    this.http = axios;

    this.$apiURL = 'https://5fe0e4ff04f0780017de96ce.mockapi.io';
  }
}

export default Service;
