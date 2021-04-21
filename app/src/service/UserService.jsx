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

    async retrieveUser(id)
    {
        return LocalStorageService.get('users', true).then(async (data) => {
            if (data === null){
                await UserApi.getUser(id).then(user => {
                    LocalStorageService.set('users', [user], true);
                    return user;
                })
            }

            const user = data.filter(user => {
                return user.id === id
            })

            if(user === null){
                await UserApi.getUser(id).then(user => {
                    LocalStorageService.set('users', [...data, user], true);
                    return user;
                })
            }else
                return user[0];
        })
    }
}

export default new UserService();
