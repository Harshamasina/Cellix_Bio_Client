import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";

const Error404 = () => {
    return(
        <div>
            <div className='landingpage'>
              <img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Error+New+404_2.jpg" className='video-bg' alt='error'/>
                    <div className='home-text'>
                            <div>
                                <h1 className='Carouselh1'>ERROR 404</h1>
                                <p className='Carouselp'>The page you are looking for doesn't exist or has been moved.</p>
                            </div>
                     </div>
                    <Link to="/Home"><Button className='Errorbutton'>BACK TO HOME PAGE <AiOutlineArrowRight></AiOutlineArrowRight></Button></Link>
            </div>
        </div>
    );
};

export default Error404;