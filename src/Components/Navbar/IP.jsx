import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NoInternetConnection from '../Body/NoInternetConn';
import { Helmet } from 'react-helmet';

const IP = () => {
    const [usPatents, setUSPatents] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/cbuspatents`);
                setUSPatents(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    },[]);

    return (
        <>
            <Helmet>
                <title>Portfolio | Cellix Bio</title>
                <meta name="description" content="U.S Patent Portfolio of Cellix Bio"/>
                <meta name="keywords" content="cellix bio US Patents, Avaca Us Patents , cellix bio pharma us patents" />
            </Helmet>

            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Brain.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
                    <div className='pipeline-text'>
                            <div className='patents_text_1'>
                                <h1 className='pipelineCarouselh1'>INTELLECTUAL PROPERTY PORTFOLIO</h1>
                            </div>
                        </div>
                    </div>
                <div className='IPContainer'>
                    <div className="IPpContainerp">
                    <p className="IPp"><span className="AboutSpan">Cellix Bio</span> has a portfolio of over 600+ international patents published. The Company has 160+ U.S Patent Portfolio comprising Composition of Matter, Formulation Patents in diverse therapeutic areas. We are also committed to protect our intellectual property estate of patent rights and trade secrets for our proprietary technology.</p>
                </div>
            </div>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>U.S PATENT PORTFOLIO</h4></Accordion.Header>
                        <Accordion.Body className='IPAB'>
                            <NoInternetConnection>
                                <Table striped hover className='mt-3 shadow-sm auto-index'>
                                    <thead>
                                        <tr>
                                            <th className='IPPatentTableHead'>S.NO</th>
                                            <th className='IPPatentTableHead'>PATENT NUMBER</th>
                                            <th className='IPPatentTableHead'>TITLE</th>
                                            <th className='IPPatentTableHead'>PUBLICATION DATE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usPatents && usPatents.map((uspatent) => (
                                                <tr key={uspatent._id}>
                                                    <td></td>
                                                    <td className='usPatentNumber'>{uspatent.patent_number}</td>
                                                    <td className='usPatentTitle'>{uspatent.title}</td>
                                                    <td>{uspatent.publication_date}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </NoInternetConnection>
                        </Accordion.Body>
                    </Accordion.Item>
            </Accordion>
        </>
    )
};

export default IP;