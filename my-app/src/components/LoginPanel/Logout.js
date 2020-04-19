import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import fire from '../Firebase/firebase';
import { Translation } from 'react-i18next';


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
                <Translation>
                {(t) => <Button onClick={this.logout}><p>{t('Wyloguj.79')}</p></Button>}
                </Translation>
            </div>
        );
    }
}

export default Home;