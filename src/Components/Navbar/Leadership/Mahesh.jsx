import { Helmet } from "react-helmet";
import { Breadcrumbs } from '@mui/material';
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";

const Mahesh = () => {
    return(
        <div>
            <Helmet>
                <title>Mahesh Kandula | Cellix Bio</title>
                <meta name="description" content="Mahesh Kandula"/>
                <meta name="keywords" content="Board of Members and directors of Cellix Bio, cellix bio Founder CEO, COO and Scientific Team and Advisors, 
                    Avaca CEO, COO and Scientific Team and Advisors , cellix bio pharma Founder CEO, COO and Scientific Team and Advisors, 
                    Mahesh Kandula," 
                />
            </Helmet>
            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Board.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>Mahesh Kandula</h1>
                    </div>
                </div>
            </div>
            <Breadcrumbs separator="\" className='bread-crumb'>
                <Link to="/home" className='BC-Links'>Home</Link>
                <Link to="/Leadership" className='BC-Links'>Leadership</Link>
                <Link to="/mahesh_k" className='BC-Links'>Mahesh Kandula</Link>
            </Breadcrumbs>
            <div className="LeaderContainerPage">
                <img className="LeaderImgPage" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Cellix+Mahesh+Kandula+-+1.jpg" alt="leader"></img>
                <div className="LeaderContentPage">
                    <h1>MAHESH KANDULA</h1>
                    <h2>FOUNDER</h2>
                    <a className="LeaderIcon" href="https://www.linkedin.com/in/mahesh-kandula-b052a752/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                    <p>Mahesh brings over 18 years of scientific and entrepreneurial experience in the life science industry. Mr. Kandula has been named an inventor on 180+ United States Patents and Applications and, more than 640+ International Patent Applications. Mr. Kandula received his Master of Technology degree from IIT Kharagpur.</p>
                </div>
            </div>
        </div>
    );
}

export default Mahesh;