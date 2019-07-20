import HttpService from "./HttpService";

const BASE_URL = "api/review";

async function addReview({ content, userId, carId }) {
  return await HttpService.ajax(BASE_URL, "post", {
    content,
    userId,
    carId
  });
}

export default {
  addReview
};
