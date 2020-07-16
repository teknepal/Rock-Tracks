import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';

import Tracks from './tracks';
import TrackDetails from './details';
import fetchJsonp from 'fetch-jsonp';

import './app.css';

class Homepage extends Component {
	public props: any;
    componentDidMount = () => {
            fetchJsonp('https://itunes.apple.com/search?term=rock&media=music')
            .then(response =>  {
                return response.json()
            })
            .then(jsonTracks => {
                this.props.onGetTracks(jsonTracks.results);
            })
    }

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink className="nav-link-styles" to="/" exact>Rock Tracks</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/rocktracks/:id" component={TrackDetails}></Route>
                    <Route path="/" exact component={Tracks}></Route>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; rockTracks: any; }) => any) => {
    return {
        onGetTracks: (returnedTracks: any) => dispatch({type: 'GET_TRACKS', rockTracks: returnedTracks})
    };
};

export default connect(null, mapDispatchToProps)(Homepage);
