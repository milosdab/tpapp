import React from 'react';
import { render } from '@testing-library/react';

import UserList from '../components/Users/UserList';


let users = [
    {
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        id: 7,
        last_name: "Lawson"
    },
    {
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        id: 8,
        last_name: "Ferguson",
    }
]


test('to check if it renders', () => {


    render(<UserList users={users} />)

});