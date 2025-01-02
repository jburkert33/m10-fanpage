import { Link } from 'react-router-dom';
import './MapStyle.scss';  // Make sure to import the SCSS file

export function Map() {
    return (
        <>
            <link href='//fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700' rel='stylesheet' type='text/css' />
            <link href='//fonts.googleapis.com/css?family=Roboto:100,300,400,700,900' rel='stylesheet' type='text/css' />
            <h1> Middle Earth </h1>
            <p className="description"> Description Here <strong>Click the points to expand them.</strong></p>
            <div className="distribution-map">
                <img class="map-image-container" src="Images\Map.jpeg" alt="Middle Earth" style={{ width: '100%', height: 'auto'}}/>
                <button className="map-point" style={{ top: '15%', left: '35%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>A Place</h2>
                            <p>You can put plenty of details in here. In the original, I listed contact information and linked phone numbers and email addresses.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '35%', left: '50%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Another Place</h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
}

export default Map;