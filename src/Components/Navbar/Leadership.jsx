import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Leadership = () => {
    return(
        <>
            <Helmet>
                <title>Leadership | Cellix Bio</title>
                <meta name="description" content="Board of Members and directors of Cellix Bio"/>
                <meta name="keywords" content="Board of Members and directors of Cellix Bio, cellix bio Founder CEO, COO and Scientific Team and Advisors, 
                    Avaca CEO, COO and Scientific Team and Advisors , cellix bio pharma Founder CEO, COO and Scientific Team and Advisors, 
                    Mahesh Kandula, Subbu Apparsundaram, Frank Diana, Mudher Albassam, Douglas Greene, Paul Jeffrey, Mahesh Kandula Founder CEO Inventor" 
                />
            </Helmet>
            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Bulbs.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>LEADERSHIP</h1>
                    </div>
                </div>
            </div>
            <div className="Teams">
                <div className="TeamsContainer1">
                    <div className="TeamMember1">
                        <Link to='/mahesh_k'><img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Cellix+Mahesh+Kandula+-+1.jpg" alt="Leaders"></img></Link>
                        <Link to='/mahesh_k'><h2>Mahesh Kandula</h2></Link>
                        <h3>FOUNDER</h3>
                    </div>

                    <div className="TeamMember1">
                        <Link to="/subbu_a"><img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.SubbuApparsundaram+(edit).png" alt="Leaders"></img></Link>
                        <Link to="/subbu_a"><h2>Subbu Apparsundaram</h2></Link>
                        <h3>CDO & COO</h3>
                    </div>
                </div>
                
                <h1 className="Teamsh1">Science Team</h1>
                
                <div className="TeamsContainer">
                    <div className="TeamMember2">
                        <Link to='/frank_d'><img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.FrankDiana.PNG" alt="Leaders"></img></Link>
                        <Link to='/frank_d'><h2>Frank Diana</h2></Link>
                        <h3>CMC & REGULATORY</h3>
                    </div>
                    <div className="TeamMember2">
                        <Link to='/mudher_a'><img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.Mudher.PNG" alt="Leaders"></img></Link>
                        <Link to='/mudher_a'><h2>Dr. Mudher Albassam</h2></Link>
                        <h3>PRE-CLINICAL DEVELOPMENT</h3>
                    </div>
                    <div className="TeamMember2">
                        <Link to='/douglas_g'><img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.Douglas(edit+bg).png" alt="Leaders"></img></Link>
                        <Link to='/douglas_g'><h2>Dr. Douglas Greene</h2></Link>
                        <h3>MEDICAL AFFAIRS & STRATEGIC ADVISOR</h3>
                    </div>
                    <div className="TeamMember2">
                        <Link to='/paul_j'><img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.PaulJeffery(edit).png" alt="Leaders"></img></Link>
                        <Link to='/paul_j'><h2>Paul Jeffrey</h2></Link>
                        <h3>BUSINESS STRATEGY AND ADVISOR</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Leadership;