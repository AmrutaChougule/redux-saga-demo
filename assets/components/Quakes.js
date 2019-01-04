import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import store from '../store';

class Quakes extends React.Component {
    render() {
        const { quakes } = this.props;

        if (quakes.length <= 0) {
            return null;
        }

        return (
            <ul>
            {
                quakes.map((quake, idx) => {
                    const { properties: { detail, title } } = quake;

                    return (
                        <li key={`link_${idx}`}>
                            <a href={detail}>{title}</a>
                        </li>        
                    )
                })
            }
            </ul>
        );
    }
}

const mapStateToProps = store => {
    return {
        quakes: store.myState.get('quakes').toJS(),
    };
};

export default connect(mapStateToProps)(Quakes);
