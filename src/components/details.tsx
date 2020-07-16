import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';

class TrackDetails extends Component {
    public rockTrxTime: any;
    public props: any;
    public rockTrxDate: any;

    constructor(props: Readonly<{}>) {
        super(props);
    }
    convertTime = (trackTime: number) => {
        var seconds = Math.floor((trackTime / 1000) % 60);
        var minutes = Math.floor((trackTime / (60 * 1000)) % 60);
        return minutes + ":" + seconds;
    }

    convertDate = (releaseDate: string) => {
        var splitDateString = releaseDate.split("-");
        var splitDateStringMonth = splitDateString[2].split("T", 1)
        return splitDateString[1] + "-" + splitDateStringMonth + "-" + splitDateString[0];
    }
    
    render() {
        return (
            <div>
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img className="" src={this.props.rockTrxIndex.artworkUrl100} alt={this.props.rockTrxIndex.artworkUrl100}></img>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Title: {this.props.rockTrxIndex.trackName} </h4>
                        <h4 className="card-title">Artist: {this.props.rockTrxIndex.artistName} </h4>
                        <h5 className="card-title">Price:${this.props.rockTrxIndex.trackPrice} </h5>
                        <h5 className="card-title">Release Date:{this.convertDate(this.props.rockTrxIndex.releaseDate)} </h5>
                        <h5 className="card-title">Duration:{this.convertTime(this.props.rockTrxIndex.trackTimeMillis)} </h5>
                        <button className="track-details-button-style" onClick={() => window.open(this.props.rockTrxIndex.trackViewUrl, "_blank")}>More Details</button>
                    </div>
                </div>
                <div className="card-footer"></div>
            </div>
        )
    }
};

const mapStateToProps = (state: { rockTracks: any; selectedRockTrack: any; }) => {
    return {
        rockTrx: state.rockTracks,
        rockTrxIndex: state.selectedRockTrack
    }
}
export default connect(mapStateToProps)(TrackDetails);