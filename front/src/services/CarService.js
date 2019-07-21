import HttpService from './HttpService';

const BASE_URL = 'api/car';

async function query() {
  return await HttpService.ajax(`${BASE_URL}`);
}

async function getById(id) {
  return await HttpService.ajax(`${BASE_URL}/${id}`);
}

export default {
  query,
  getById
};
