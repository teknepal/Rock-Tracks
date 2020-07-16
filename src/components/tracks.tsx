import React, { Component } from 'react';
import { connect } from 'react-redux';
import Track from './track';

class Tracks extends Component {
    public props: any;
    selectedTrackHandler = (trackIndex: string) => {
        this.props.onSelectedTrack(trackIndex);
        this.props.history.push('/rocktracks/' + trackIndex);
    }
    render() {
        const rockTracks = this.props.rockTrx.map((rockTrack: {
            trackId: string | number | undefined;
            trackName: React.ReactNode; artistName: React.ReactNode; trackPrice: React.ReactNode;
            artworkUrl100: string | undefined; trackTimeMillis: any; releaseDate: any;
        }, index: string) => {
            return <Track
                key={rockTrack.trackId}
                trackName={rockTrack.trackName}
                artist={rockTrack.artistName}
                trackPrice={rockTrack.trackPrice}
                artworkURL={rockTrack.artworkUrl100}
                trackDuration={rockTrack.trackTimeMillis}
                trackReleaseDate={rockTrack.releaseDate}
                selectedPost={() => this.selectedTrackHandler(index)} />
        })
        return (
            <div>
                {rockTracks}
            </div>
        )
    }
}

const mapStateToProps = (state: { rockTracks: any; selectedRockTrack: any; }) => {
    return {
        rockTrx: state.rockTracks,
        rockTrxIndex: state.selectedRockTrack
    };
}
const mapDispatchToProps = (dispatch: (arg0: { type: string; rockTrackIndex: any; }) => any) => {
    return {
        onSelectedTrack: (trackIndex: any) => dispatch({ type: 'SET_TRACK', rockTrackIndex: trackIndex })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);