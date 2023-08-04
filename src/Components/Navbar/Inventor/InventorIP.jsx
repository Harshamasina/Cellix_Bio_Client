import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const InventorIP = () => {
    const [usPatents, setUSPatents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/uspatents`);
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
                <meta name="keywords" content="Cellix Bio U.S Patents, Applied and Published patents of Cellix Bio in U.S, 
                    Mahesh Kandula's Patents Applied and Published U.S Patents from 2009 to 2023, Cellix Bio US Patent Portfolio"
                />
            </Helmet>
            
            <div className="YearsContainerh2">
                <h2 className="InventorIPh2">Mahesh Kandula has a portfolio of over 180+ U.S Patents and Applications</h2>
            </div>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>U.S PATENT PORTFOLIO</h4></Accordion.Header>
                        <Accordion.Body className='INAB'>
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
                        </Accordion.Body>
                    </Accordion.Item>
            </Accordion>           
        </>
    )
};

export default InventorIP;