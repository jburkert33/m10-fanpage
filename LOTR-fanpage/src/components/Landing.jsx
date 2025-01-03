import './LandingStyle.css';

export default function Landing() {
    return (
        <div className='landing-container'>
            <h1 className='landing-title'>LOTR Fansite</h1>
            <h3 className='landing-subtitle'>Welcome to the Lord of the Rings Fansite! Speak, friend, and enter.</h3>
            <div className='book-cover'>
                <img className='book-image' src='https://covers.shakespeareandcompany.com/97802611/9780261103573.jpg' />
            </div>
            <div className='book-cover'>
                <img className='book-image' src='https://covers.shakespeareandcompany.com/97802611/9780261103580.jpg' />
            </div>
            <div className='book-cover'>
                <img className='book-image' src='https://covers.shakespeareandcompany.com/97802611/9780261103597.jpg' />
            </div>
        </div>
    )
}