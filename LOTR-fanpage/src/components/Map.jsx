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
                <button className="map-point" style={{ top: '30%', left: '36%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Hobbiton</h2>
                            <p>You can put plenty of details in here. In the original, I listed contact information and linked phone numbers and email addresses.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '20%', left: '70%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>The Lonely Mountain</h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '60%', left: '52%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Helms Deep</h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '70%', left: '67%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Minas Tirith</h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '55%', left: '51%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Isengard</h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '62%', left: '55%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>Edoras</h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '66%', left: '73%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2>MT Doom</h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
}

export default Map;