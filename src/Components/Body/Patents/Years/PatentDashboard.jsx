import Card from 'react-bootstrap/Card';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';
import PatentCardSkeleton from './PatentCardSkeleton';
import NoInternetConn from '../../NoInternetConn';
import { Helmet } from 'react-helmet';
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";
import { Breadcrumbs } from '@mui/material';

const PatentDashboard = () => {
    const [patents, setPatents] = useState([]);
    const {years} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/patents/years/${years}`);
                setPatents(res.data);
            } catch (err) {
                console.error(err);
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [years]);

    if(error){
        return <div className='error-container'><MdSignalWifiConnectedNoInternet0 className='error-icon' /><p>{error.message}</p></div>;
    }

    return (
        <div>
            <Helmet>
                <title>{years} | Patents | Cellix Bio</title>
                <meta name="description" content={years}/>
                <meta name='description' content='Patents filed by Cellix Bio in 2023 to 2014' />
                <meta name='keywords' content='2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, years years wise cellix bio patents from 2014 - 2022, cellix bio patents yearly
                    Cellix Bio Patents DashBoard from 2023 to 2014' 
                />
            </Helmet>

            <div className='patentlandingpage'>
                <img  className='patents_video_bg' src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/gruene-chemie.PNG" alt='benzene rings'/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>Patents filed by Cellix Bio in {years}</h1>
                    </div>
                </div>
            </div>

            <Breadcrumbs separator="\" className='bread-crumb'>
                <Link to="/Home" className='BC-Links'>Home</Link>
                <Link to="/Patents" className='BC-Links'>Patents</Link>
                <Link to={"/PatentsDashboard/"+years} className='BC-Links'>{years}</Link>
            </Breadcrumbs>

            <NoInternetConn>
                {loading ? (<PatentCardSkeleton />) : (
                    patents.map((patent) => (
                        <div className='CardContainer' key={patent._id}>
                                <Card
                                    style={{ width: '90rem' }} 
                                    className = "shadow-lg PatentsCard">
                                <Card.Body>
                                        <Card.Title>
                                            <Link className='Wno' to= {"/PatentInfo/"+patent.wno.replaceAll("/", "%2F")} target={"_blank"}>{patent.wno}</Link>
                                        </Card.Title>
                                        <div className='cardTextContainer'>
                                            <div className='cardTextInfoContainer'>
                                                <Card.Text className='CardTextInfo'>
                                                    <p>{patent.diseases}</p>
                                                </Card.Text>
                                            </div>
                                            <div className='cardTextDateContainer'>
                                                <Card.Text>
                                                    <p><span className='CardTextSpan'>Publication Date: </span>{patent.publication_date}</p>
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                        </div>
                    ))
                )}
            </NoInternetConn>   
        </div>
    )
};

export default PatentDashboard;