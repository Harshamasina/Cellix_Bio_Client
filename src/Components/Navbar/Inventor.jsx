import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import NoInternetConn from '../Body/NoInternetConn';
import InventorIP from './Inventor/InventorIP';
import InventorYears from './Inventor/InventorYears';

const Inventor = () => {
    return (
        <div>
            <Helmet>
                <title>Inventor | Cellix Bio</title>
                <meta name="description" content="Mahesh Kandula Founder and CEO of Cellix Bio"/>
                <meta name="keywords" content="
                Mahesh Kandula, 
                cellix bio Founder, Inventor, MD, CEO, 
                Avaca Pharma MD CEO , 
                cellix bio pharma MD CEO. 
                Mahesh Kandula year wise patents portfolio,
                mahesh kandula US Patent Portfolio" 
            />
            </Helmet>
            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Neurons.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                    <h1 className='pipelineCarouselh1'>INVENTOR</h1>
                    </div>
                </div>
            </div>

            <Card className="inventor-card">
                <Link to='/mahesh_k'><Card.Img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Cellix+Mahesh+Kandula+-+1.jpg" alt="Leaders" className="Inventor-image"/></Link>
                <Card.Body className="inventor-body">
                <Link to='/mahesh_k'><h2>Mahesh Kandula</h2></Link>
                <h3>INVENTOR</h3>
                </Card.Body>
            </Card>
            
            <NoInternetConn>
                <InventorYears></InventorYears>
                <InventorIP></InventorIP>
            </NoInternetConn>
        </div>
    )
};

export default Inventor;