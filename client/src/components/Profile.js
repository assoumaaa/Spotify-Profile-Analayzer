import React from 'react';
import Nav from './Nav';
import User from './User';
import TopArtists from './TopArtists'
import TopTracks from './TopTracks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../sass/Profile.scss'


const Profile = () => {

    return (
        <div className="profile">
            <BrowserRouter>
                <Nav />
                <div className="sections">
                    <Routes>
                        <Route path='/' element={<User />} />
                        <Route path='/topArtists' element={<TopArtists />} />
                        <Route path='/topTracks' element={<TopTracks />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Profile
