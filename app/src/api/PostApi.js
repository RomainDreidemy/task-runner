import BaseApi from "./BaseApi";

class PostApi extends BaseApi{
    async getPost(id) 
    {
        const {data} = await this.get(`/posts/${id}`)
        return data
    }

    async getCommentsByPost(id)
    {
        const {data} = await this.get(`/posts/${id}/comments`)
        return data;
    }
}

export default new PostApi();
