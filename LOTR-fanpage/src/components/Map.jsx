import { Link } from 'react-router-dom';
import './MapStyle.scss';  // Make sure to import the SCSS file

export function Map() {
    return (
        <>
            <link href='//fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700' rel='stylesheet' type='text/css' />
            <link href='//fonts.googleapis.com/css?family=Roboto:100,300,400,700,900' rel='stylesheet' type='text/css' />
            <h1> Middle Earth </h1>
            <p className="description"> An interactive map of Middle Earth <strong>Click the points to expand them.</strong></p>
            <div className="distribution-map">
                <img class="map-image-container" src="Images\Map.jpeg" alt="Middle Earth" style={{ width: '100%', height: 'auto'}}/>
                <button className="map-point" style={{ top: '30%', left: '36%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2><strong>Hobbiton</strong></h2>
                            <p>You can put plenty of details in here. In the original, I listed contact information and linked phone numbers and email addresses.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '20%', left: '70%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2><strong>The Lonely Mountain</strong></h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '60%', left: '52%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2><strong>Helms Deep</strong></h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '70%', left: '67%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2><strong>Minas Tirith</strong></h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '55%', left: '51%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2><strong>Isengard</strong></h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '62%', left: '55%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2><strong>Edoras</strong></h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '66%', left: '73%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2><strong>MT Doom</strong></h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '40%', left: '52%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2><strong>Moria</strong></h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '28%', left: '56%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2><strong>Rivendell</strong></h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '30%', left: '28%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2><strong>The Grey Havens</strong></h2>
                            <p>More details can go here.</p>
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
}

export default Map;