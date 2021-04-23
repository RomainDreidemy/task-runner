import LocalStorageService from "./LocalStorageService";
import UserApi from "../api/UserApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

class UserService
{
    async retrieveUsers()
    {
        return LocalStorageService.get('users', true).then(data => {
            if (data === null){
                UserApi.getUsers().then(data => {
                    LocalStorageService.set('users', data, true)
                    return data ?? [];
                })
                    .catch(() => {
                        return []
                    })
            }
            else
                return data ?? [];
        })
    }

    async retrieveUser(id)
    {
        return LocalStorageService.get('users', true).then(async (data) => {
            if (data === null){
                return await UserApi.getUser(id).then(user => {
                    LocalStorageService.set('users', [user], true);
                    return user;
                })
            }

            const user = data.filter(user => {
                return user.id === id
            })

            if(user.length < 1){
                return await UserApi.getUser(id).then(user => {
                    LocalStorageService.set('users', [...data, user], true);
                    return user;
                })
            }else
                return user[0];
        })
    }

    async retrieveTodos(user_id)
    {
        return LocalStorageService.get('todos', true).then(async (todos) => {
            if(todos === null){
                return await UserApi.getTodosByUser(user_id).then((todos => {
                    LocalStorageService.set('todos', todos, true);
                    return todos;
                }))
            }

            const userTodos = todos.filter(todo => {
                return todo.userId === user_id
            })

            if(userTodos.length < 1){
                return await UserApi.getTodosByUser(user_id).then((todos => {
                    LocalStorageService.set('todos', todos, true);
                    return todos;
                }))
            }

            return userTodos;
        })
    }

    async retrieveAlbums(user_id)
    {
        return LocalStorageService.get('albums', true).then(async (albums) => {
            if(albums === null){
                return await UserApi.getAlbumsByUser(user_id).then((albums) => {
                    LocalStorageService.set('albums', albums, true);
                    return albums;
                })
            }

            const userAlbums = albums.filter(album => {
                return album.userId === user_id
            })

            if(userAlbums.length < 1){
                return await UserApi.getAlbumsByUser(user_id).then((albums) => {
                    LocalStorageService.set('albums', albums, true);
                    return albums;
                })
            }

            return userAlbums;
        })
    }

    async retrievePosts(user_id)
    {
        return LocalStorageService.get('posts', true).then(async (posts) => {
            if(posts === null){
                return await UserApi.getPostsByUser(user_id).then((posts) => {
                    LocalStorageService.set('posts', posts, true);
                    return posts;
                })
            }

            const userPosts = posts.filter(post => {
                return post.userId === user_id
            })

            if(userPosts.length < 1){
                return await UserApi.getPostsByUser(user_id).then((posts) => {
                    LocalStorageService.set('posts', posts, true);
                    return posts;
                })
            }

            return userPosts;
        })
    }
}

export default new UserService();
