import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import fire from '../Firebase/firebase';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <Button content ="Wyloguj" onClick={this.logout}></Button>
            </div>
        );

    }

}

export default Home;