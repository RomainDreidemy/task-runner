import BaseApi from "./BaseApi";

class UserApi extends BaseApi{
    async getUsers()
    {
        const {data} = await this.get('/users')
        return data;
    }
}

export default new UserApi();
