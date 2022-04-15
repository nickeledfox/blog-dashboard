import axios, { AxiosResponse } from 'axios';
const URL = '/api/post';

export default class API {
  static async getPostList(req: any, res: AxiosResponse<any, any>) {
    res = await axios.get(URL);
    return res.data;
  }

  static async getPostByID(id: string) {
    const res = await axios.get(`${URL}/${id}`);
    return res.data;
  }

  static async addPost(post: any) {
    const res = await axios.post(URL, post);
    return res.data;
  }

  static async updatePost(id: string, post: any) {
    const res = await axios.patch(`${URL}/${id}`, post);
    return res.data;
  }

  static async delPostByID(id: string) {
    const res = await axios.delete(`${URL}/${id}`);
    return res.data;
  }
}
