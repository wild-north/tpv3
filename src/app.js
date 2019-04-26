import React from 'react';
import { AppRouter } from 'routes';
import { register } from 'services/user';

const usr = '{"data":{"id":"4060741400009678246","fullName":"Denys Grynov","email":"Denys_Grynov@epam.com","role":"ADMIN","dateAdded":"2018-07-09T10:14:02Z","imageUrl":"https://static.cdn.epam.com/avatar/c54adae66a1ddbbbfad3b40221a692a6.jpg","status":"ACTIVE","checker":false,"testee":false}}';

const user = register(JSON.parse(usr).data);

console.log(user);

export const App = () => {
    return (
        <div className="app">
            <AppRouter/>
        </div>
    );
};
