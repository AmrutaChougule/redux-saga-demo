import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import axios from 'axios';

import store from '../store';

import Quakes from './Quakes';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <>
                    Quakes:
                    <Quakes />
                </>
            </Provider>
        );
    }
}
