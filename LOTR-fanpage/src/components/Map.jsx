import { Link } from 'react-router-dom';
import './MapStyle.scss';  // Make sure to import the SCSS file

export function Map() {
    return (
        <>
            <link href='//fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700' rel='stylesheet' type='text/css' />
            <link href='//fonts.googleapis.com/css?family=Roboto:100,300,400,700,900' rel='stylesheet' type='text/css' />
            <h1 id="MapTitle"> Middle Earth </h1>
            <p className="description"> An interactive map of Middle Earth <strong>Click the points to expand them.</strong></p>
            <div className="distribution-map">
                <img class="map-image-container" src="Images\Map.jpeg" alt="Middle Earth" style={{ width: '100%', height: 'auto'}}/>
                <button className="map-point" style={{ top: '30%', left: '36%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2 id="subTitle"><strong>Hobbiton</strong></h2>
                            <p>Hobbiton was located in the center of the Shire in the far eastern part of the Westfarthing. It was the home of many illustrious Hobbits, including Bilbo and Frodo Baggins and Samwise Gamgee.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '20%', left: '70%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2 id="subTitle"><strong>The Lonely Mountain</strong></h2>
                            <p>The Lonely Mountain, known in Sindarin as Erebor, referred to both a mountain in northern Rhovanion and the subterranean Dwarven city contained within it.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '60%', left: '52%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2 id="subTitle"><strong>Helms Deep</strong></h2>
                            <p>named for Helm Hammerhand, was a fortified gorge in the White Mountains located below the Thrihyrne. It lay near the Westfold and was the location of the Hornburg. </p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '70%', left: '67%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2 id="subTitle"><strong>Minas Tirith</strong></h2>
                            <p>Minas Tirith, the Tower of Guard, formerly known as Minas Anor, the Tower of the Sun, was the capital city of Gondor from TA 1640 onward..</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '55%', left: '51%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2 id="subTitle"><strong>Isengard</strong></h2>
                            <p>Isengard, also known as Angrenost ('Iron Fortress') in Sindarin, was one of the three major fortresses of Gondor, and held within it one of the realm's palantíri.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '62%', left: '55%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2 id="subTitle"><strong>Edoras</strong></h2>
                            <p>Edoras (Rohanese for 'the courts'[1]) was the capital of Rohan. Built principally of wood, Edoras was also where Rohan's kings were buried, in two lines of Barrows just outside the main gate.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '66%', left: '73%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2 id="subTitle"><strong>MT Doom</strong></h2>
                            <p>Mount Doom, also known as Orodruin and Amon Amarth, was a volcano in Mordor where the One Ring was forged by the Dark Lord Sauron, and accordingly the only place in which it could be destroyed.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '40%', left: '52%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2 id="subTitle"><strong>Moria</strong></h2>
                            <p>Khazad-dûm, also known as the Dwarrowdelf, the Mines of Moria, or simply Moria, was an underground kingdom beneath the Misty Mountains. It was known for being the ancient realm of the Dwarves of Durin's Folk, and the most famed of all Dwarven realms.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '28%', left: '56%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2 id="subTitle"><strong>Rivendell</strong></h2>
                            <p>Rivendell, or Imladris in Sindarin, was the name of an Elven settlement in Eastern Eriador and the valley containing it. Founded by Elrond Half-elven, it was first a stronghold and refuge in the Elves' first war with Sauron in the Second Age.</p>
                        </div>
                    </div>
                </button>
                <button className="map-point" style={{ top: '30%', left: '28%' }}>
                    <div className="content">
                        <div className="centered-y">
                            <h2 id="subTitle"><strong>The Grey Havens</strong></h2>
                            <p>The Grey Havens was founded at the beginning of the Second Age by the surviving Elves of Beleriand, those who chose to remain on Middle-earth after the wars against Morgoth.</p>
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
}

export default Map;