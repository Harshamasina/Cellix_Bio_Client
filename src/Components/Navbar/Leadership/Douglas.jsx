import { Helmet } from "react-helmet";
import { Breadcrumbs } from '@mui/material';
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";

const Douglas = () => {
    return(
        <div>
            <Helmet>
                <title>Douglas Greene | Cellix Bio</title>
                <meta name="description" content="Douglas Greene"/>
                <meta name="keywords" content="Board of Members and directors of Cellix Bio, cellix bio Founder CEO, COO and Scientific Team and Advisors, 
                    Avaca CEO, COO and Scientific Team and Advisors , cellix bio pharma Founder CEO, COO and Scientific Team and Advisors, 
                    Douglas Greene," 
                />
            </Helmet>
            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Board.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>Douglas Greene</h1>
                    </div>
                </div>
            </div>
            <Breadcrumbs separator="\" className='bread-crumb'>
                <Link to="/home" className='BC-Links'>Home</Link>
                <Link to="/Leadership" className='BC-Links'>Leadership</Link>
                <Link to="/douglas_g" className='BC-Links'>Douglas Greene</Link>
            </Breadcrumbs>
            <div className="LeaderContainerPage">
                <img className="LeaderImgPage" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.Douglas(edit+bg).png" alt="leader"></img>
                <div className="LeaderContentPage">
                    <h1>Dr. Douglas Greene</h1>
                    <h2>MEDICAL AFFAIRS & STRATEGIC ADVISOR</h2>
                    <a className="LeaderIcon" href="https://www.linkedin.com/in/douglas-greene-a6942736/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                    <p>Douglas Greene, MD, served as Executive Vice President, Chief Scientific Officer and Head, Research and Development, Ikaria Pharmaceuticals; Senior Vice President and Senior Scientific Advisor and Head of Corporate Regulatory Development at Sanofi-Aventis; Executive Vice President of Clinical Sciences and Product Development at Merck Research Laboratories and Corporate Officer of Merck, Inc.; served as member of the US Food and Drug Administration's Endocrinologic and Metabolic Drug Advisory Committee and acted as Chairman of the Advisory Committee.</p>
                    <p>Dr. Greene was Professor of Internal Medicine, Director of the Michigan Diabetes Research and Training Center, and Chief, Division of Endocrinology & Metabolism at the University of Michigan School of Medicine. Dr. Greene was Associate Professor of Internal Medicine, Director of the Diabetes Research Laboratory and Head of the General Clinical Research Center at the University of Pittsburgh, and Assistant Professor of Internal Medicine at the University of Pennsylvania. Dr. Greene completed a post-doctoral research fellowship at the Cox Research Institute at the University of Pennsylvania, and Internal Medicine internship and residency at Johns Hopkins Hospital. Dr Greene holds an MD from the Johns Hopkins School of Medicine.</p>
                </div>
            </div>
        </div>
    );
}

export default Douglas;