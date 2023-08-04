import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Claims from './Claims';
import Compounds from './Compounds';
import Formulas from './Formulas';
import {Link, useParams} from 'react-router-dom';
import TherapeuticArea from './TherapeuticArea';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Breadcrumbs } from '@mui/material';

const PatentInfo = () => {
    const {wno} = useParams();
    const [patent, setPatent] = useState({});
    const [patentFormulas, setPatentFormulas] = useState("formulas are loading");
    const [patentCompounds, setPatentCompounds] = useState("Compounds are Loading");
    const [therapeuticArea, setTherapeuticArea] = useState("Therapeutic Area is Loading");
    const [diseases, setDiseases] = useState("Diseases are loading");
    const [claims, setClaims] = useState("Claims are Loading");
    const [pubDate, setPubDate] = useState("Publication Date is Loading");
    const [PCT, setPCT] = useState("PCT is Loading");

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`${import.meta.env.VITE_API_URL}/patents/wipo/${wno.replaceAll("/", "%2F")}`);
            setPatent(data.data[0]);
            setPatentFormulas(data.data[0].formula);
            setPatentCompounds(data.data[0].compounds);
            setTherapeuticArea(data.data[0].therapeutic_area);
            setDiseases(data.data[0].diseases);
            setClaims(data.data[0].claims);
            setPubDate(data.data[0].publication_date);
            setPCT(data.data[0].pct);
        };
        fetchData();
    }, [wno]);

    return (
        <>
            <Helmet>
                <title>{wno} | Cellix Bio</title>
                <meta name='description' content={wno} />
                <meta name='description' content={therapeuticArea} />
                <meta name='description' content={diseases} />
                <meta name='keywords' content={wno} />
                <meta name='keywords' content={PCT} />
                <meta name='keywords' content="Therapeutic Area, Formulas, Claims, Compounds and Methods of patents filed by cellix bio,
                    cellix bio patent, patentscope, cellix bio patents"
                />
                <meta name='keywords' content={therapeuticArea} />
                <meta name='keywords' content={diseases} />
            </Helmet>

            <div className='patentlandingpage'>
                <img  className='patents_video_bg' src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Tablets.PNG" alt='patentInfo'/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>{wno}</h1>
                    </div>
                </div>
            </div>

            <Breadcrumbs separator="\" className='bread-crumb'>
                <Link to="/home" className='BC-Links'>Home</Link>
                <Link to="/Patents" className='BC-Links'>Patents</Link>
                <Link to={"/PatentsDashboard/"+patent.year} className='BC-Links'>{patent.year}</Link>
                <Link to={"/PatentInfo/"+wno} className='BC-Links'>{wno}</Link>
            </Breadcrumbs>

            <div>
                <h2 className='heading-primary'><p className='PatentInfoh2'>{wno}</p></h2>
                <p className='PatentInfoh3'>Publication Date: <span>{pubDate}</span></p>
                <p className='PatentInfoh3'>PCT / Application Number: <span>{PCT}</span></p>
                <Tabs
                    defaultActiveKey="Therapeutic Area"
                    id="uncontrolled-tab-example"
                    className="mb-3 shadow-lg Tabs"
                    fill
                    >
                    <Tab eventKey="Therapeutic Area" title="Therapeutic Area">
                        <TherapeuticArea  therapeuticArea = {therapeuticArea} diseases = {diseases}></TherapeuticArea>
                    </Tab>
                    <Tab eventKey="Formulas" title="Formulas">
                        <Formulas formula = {patentFormulas}></Formulas>
                    </Tab>
                    <Tab eventKey="Claims" title="Claims">
                        <Claims claim = {claims}></Claims>
                    </Tab>
                    <Tab eventKey="Compounds" title="Compounds and Methods">
                        <Compounds compound = {patentCompounds}></Compounds>
                    </Tab>
                </Tabs>
                <p className='PatentInfoh3link'>For more Information : <a className='PatentInfoa' href='https://patentscope.wipo.int/search/en/search.jsf' target="_blank" rel="noreferrer">WIPO Patent Scope</a></p>
            </div>
        </>
    )
};

export default PatentInfo;