import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import UserProfile from './Header/index';
import Porfolio from './Main/Portfolio';
import SiteFooter from './Footer/index';

function Profile() {

    const {id} = useParams();
  
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios
            .get(`https://628642c0f0e8f0bb7c1353e4.mockapi.io/Users?id=${id}`)
            .then((response) => {
                setUser(response.data.at(0));

                console.log( 'user', user)
            }).finally(() => {
                setIsLoading(false);
            });
    }, [])


    return (

        <div className="App">
            { (user?.id > 0) ?  (
                <div>
                    <div className="container mx-auto bg-white lg">
                        <UserProfile user={user} />
                        <Porfolio userId={id} />  
                    </div>
                    <div className='bg-black text-white'>
                        <div className="container mx-auto lg">
                            <SiteFooter user={user} />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {isLoading ? 'Loading...' : 'User not found'}
                </div>
            ) }
           
        </div>
    );
}

export default Profile;