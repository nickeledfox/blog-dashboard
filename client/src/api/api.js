import axios from 'axios';
const URL = '/api/post';

export default class API {
  static async getPostList(req, res) {
    res = await axios.get(URL);
    return res.data;
  }

  static async getPostByID(id) {
    const res = await axios.get(`${URL}/${id}`);
    return res.data;
  }

  static async addPost(post) {
    const res = await axios.post(url, post);
    return res.data;
  }

  static async addPost(id, post) {
    const res = await axios.patch(`${URL}/${id}`, post);
    return res.data;
  }

  static async delPostByID(id) {
    const res = await axios.delete(`${URL}/${id}`);
    return res.data;
  }
}
