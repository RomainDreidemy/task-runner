import LocalStorageService from "./LocalStorageService";
import UserApi from "../api/UserApi";

class UserService
{
    async retrieveUsers()
    {
        return LocalStorageService.get('users', true).then(data => {
            if (data === null){
                UserApi.getUsers().then(data => {
                    LocalStorageService.set('users', data, true)
                    return data;
                })
            }
            else
                return data;
        })
    }
}

export default new UserService();
