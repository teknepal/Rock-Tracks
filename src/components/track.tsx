import React from 'react';
const Track = (props: {
    artworkURL: string | undefined; artist: React.ReactNode; trackName: React.ReactNode;
    trackDuration: any | undefined; trackReleaseDate: any | undefined; trackPrice: React.ReactNode;
    selectedPost: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}) => {
    return (
        <div>
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img className="" src={props.artworkURL} alt={props.artworkURL}></img>
                </div>
                <div className="card-body">
                    <h4 className="card-title">Artist: {props.trackName} </h4>
                    <h4 className="card-title">Track Name: {props.trackName} </h4>
                    <h5 className="card-title">Price:${props.trackPrice} </h5>
                    <button className="track-details-button-style" onClick={props.selectedPost}>Details</button>
                </div>
            </div>
            <div className="card-footer"></div>
        </div>
    )
}

export default Track;