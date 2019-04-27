import { register } from 'services/user/user';

const userMock = '{"data":{"id":"4060741400009678246","fullName":"Denys Grynov","email":"Denys_Grynov@epam.com","role":"ADMIN","dateAdded":"2018-07-09T10:14:02Z","imageUrl":"https://static.cdn.epam.com/avatar/c54adae66a1ddbbbfad3b40221a692a6.jpg","status":"ACTIVE","checker":false,"testee":false}}';

const userApi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(JSON.parse(userMock).data);
        }, 1500);
    })
};

export const getUser = (callback) => {
    userApi()
        .then(userResponse => register(userResponse))
        .then(userData => callback(userData));
};