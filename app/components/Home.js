import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div className='home-container'>
                <h1>
                    GitHub batttle: Battle your friends!
                </h1>

                <Link className='button' to='/battle'>
                    Battle
                </Link>
            </div>
        );
    };
}

module.exports = Home;