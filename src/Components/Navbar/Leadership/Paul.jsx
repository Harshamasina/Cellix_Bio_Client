import { Helmet } from "react-helmet";
import { Breadcrumbs } from '@mui/material';
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";

const Paul = () => {
    return(
        <div>
            <Helmet>
                <title>Paul Jeffrey | Cellix Bio</title>
                <meta name="description" content="Paul Jeffrey"/>
                <meta name="keywords" content="Board of Members and directors of Cellix Bio, cellix bio Founder CEO, COO and Scientific Team and Advisors, 
                    Avaca CEO, COO and Scientific Team and Advisors , cellix bio pharma Founder CEO, COO and Scientific Team and Advisors, 
                    Paul Jeffrey," 
                />
            </Helmet>
            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Board.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>Paul Jeffrey</h1>
                    </div>
                </div>
            </div>
            <Breadcrumbs separator="\" className='bread-crumb'>
                <Link to="/home" className='BC-Links'>Home</Link>
                <Link to="/Leadership" className='BC-Links'>Leadership</Link>
                <Link to="/paul_j" className='BC-Links'>Paul Jeffrey</Link>
            </Breadcrumbs>
            <div className="LeaderContainerPage">
                <img className="LeaderImgPage" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.PaulJeffery(edit).png" alt="leader"></img>
                <div className="LeaderContentPage">
                    <h1>Paul Jeffrey</h1>
                    <h2>BUSINESS STRATEGY AND ADVISOR</h2>
                    <a className="LeaderIcon" href="https://www.linkedin.com/in/pauljeffrey10/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                    <p>Paul Jeffrey is an accomplished Pharmaceutical business consultant and leader with demonstrated new product development and business development capabilities. He has over 30 years of industry experience building product value by leading global teams and creating and implementing clinical and marketing programs to maximize commercial positioning and launch success. He has led commercial development team and alliance partnerships while at Pfizer as VP of Global Commercial Development group.</p>
                </div>
            </div>
        </div>
    );
};

export default Paul;