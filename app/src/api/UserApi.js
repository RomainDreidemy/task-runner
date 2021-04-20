import BaseApi from "./BaseApi";

class UserApi extends BaseApi{
    async getUsers()
    {
        const {data} = await this.get('/users')
        return data;
    }

    async getUser(id)
    {
        const {data} = await this.get(`/users/${id}`);
        return data;
    }

    async getAlbumsByUser(id)
    {
        const {data} = await this.get(`/users/${id}/albums`);
        return data;
    }

    async getTodosByUser(id)
    {
        const {data} = await this.get(`/users/${id}/todos`);
        return data.sort(item => item.completed);
    }

    async getPostsByUser(id)
    {
        const {data} = await this.get(`/users/${id}/posts`);
        return data
    }
}

export default new UserApi();
