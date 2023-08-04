import { Helmet } from 'react-helmet';
import Address from "./Contacts/Address";
import SendUsEmail from "./Contacts/SendUsEmail";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact | Cellix Bio</title>
                <meta name="description" content="Contact and Address of Cellix Bio Avaca Pharma Cellix Bio Pharma"/>
                    <meta name="keywords" content="Contact Number of Cellix Bio, 
                    Phone Number of Cellix Bio, address of cellix bio, business hours of cellix bio, Messages and Queries to Cellix Bio" 
                />
            </Helmet>

            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Ball.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>CONTACT</h1>
                    </div>
                </div>
            </div>

            <Address />
            <div className='ContactCont'>
                <div className='DescContainerh3'>
                    <span></span><span className="WWDh3"><h1>Send your Queries</h1></span><span></span>
                </div>
            </div>
            <SendUsEmail />
        </>
    );
};

export default Contact;