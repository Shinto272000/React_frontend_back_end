import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function UserList() {

    const [data, setData] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:7000/getusersdata')
        setData(response.data)
    }
    useEffect(() => {
        fetchUsers();
    }, [])
    return (
        <div className='row'>
            {
                data.map(
                    (user, index) => <div className='col-md-4 mb-4'>
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={user.image} />
                            <Card.Body>
                                <Card.Title>{user.fullName}</Card.Title>
                                <Card.Text>
                                    {user.about}
                                </Card.Text>
                                <Link to={"/usersdata/" + user.id}>
                                    <Button variant="primary">view</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }

        </div>
    );
}

export default UserList