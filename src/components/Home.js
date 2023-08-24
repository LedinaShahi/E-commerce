import React from 'react';
import './Home.css';
import Navbar from './Navbar'



const Home = () => {
    return (
        <div className="profile">
            <Navbar/>
            <img src="./images/ledi.png" alt="" />
            <div className="info">
                <h1>Ledina Shahi</h1>
                <p>Full-Stack Developer</p>
                <p>Hello, this is my intro page. I would like you to know more about me. </p>
                <p>In the menu bar, you can find more information about what you are interested in.</p>
                </div>
                </div>
    );
}

export default Home;