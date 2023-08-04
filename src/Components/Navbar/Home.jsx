import WWD from '../Body/WWD';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Cellix Bio</title>
                <meta name="description" content="Cellix Bio's Home Page"/>
                <meta name="keywords" content="cellix home page, avaca home page, cellix bio pharma home page" />
            </Helmet>
            <div className='landingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/DNA+HElical+Doule.mp4" autoPlay muted loop playsInline className='video-bg' type="video/mp4"/>
                <div className='home-text'>
                        <div>
                            <h1 className='Carouselh1'>Welcome to Cellix Bio</h1>
                            <p className='Carouselp'>The Company that never stops Innovating and Inventing</p>
                        </div>
                        
                        <div>
                            <h1 className='Carouselh1'>Synergix AI<sup>TM</sup> Powered Technology</h1>
                        </div>
                        
                        <div>
                            <h1 className='Carouselh1'>Harnessing the Data</h1>
                        </div>
                    </div>
                <Link className='homeBtn' to="/Patents">Search For Patents and Therapeutic Areas</Link>
            </div>
            <WWD></WWD>
        </>
    )
};

export default Home;