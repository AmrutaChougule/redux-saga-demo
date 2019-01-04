import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import axios from 'axios';

import store from '../store';

import Quakes from './Quakes';

export default class App extends React.Component {
    componentDidMount() {
        axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson').then(resp => {
            store.dispatch({
                type: 'SET_QUAKES',
                quakes: resp.data.features
            });
        });
    }

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
