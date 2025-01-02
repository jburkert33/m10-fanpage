import landingImage from '../assets/landingImage.png'

export default function Landing() {
    return (
        <div className='container'>
            <h1 className='title'>LOTR Fansite</h1>
            <div className='container mb-4 h-50'>
                <img src={landingImage} className='img-fluid' />
            </div>
        </div>
    )
}