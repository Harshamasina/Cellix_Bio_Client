import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Address = () => {
    return (
        <>
            <CardGroup  className='CUCard'>
                {/* <Card className='contactCard'>
                    <Card.Img className='CCImg' variant="top" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Address.jpg" />
                    <Card.Body>
                        <Card.Title className='CUCT'>Our Office Address:</Card.Title>
                        <Card.Text>
                            <ul className='CUUL'>
                                <li className='CULI'>Cellix Bio Private Limited</li>
                                <li className='CUSpan'>401/a, 4th Floor, SVSS Nivas, West wing Road No.1, Czech Colony</li>
                                <li className='CUSpan'>Sanath Nagar Colony Balanagar K.V.Rangareddy TG</li>
                                <li className='CUSpan'>500018, <span className='CUSpan'>India.</span></li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card> */}
                
                <Card className='contactCard'>
                    <Card.Img className='CCImg' variant="top" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Contact+Us.jpg" />
                    <Card.Body>
                        <Card.Title className='CUCT'>Contact No:</Card.Title>
                        <Card.Text>
                        <ul className='CUUL'>
                            <li className='CUSpan'>Phone : (+91) 40 23545946</li>
                            {/* <li className='CUSpan'>Fax : (+91) 40 23545949</li> */}
                            <li className='CUSpan'>Email : info@cellixbio.io</li>
                        
                        </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card className='contactCard'>
                    <Card.Img className='CCImg' variant="top" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Business+Hours.jpg" />
                    <Card.Body>
                        <Card.Title className='CUCT'>Business Hours:</Card.Title>
                        <Card.Text>
                        <ul className='CUUL'>
                            <li className='CUSpan'>Monday - Saturday : 9:00AM to 6:00PM</li>
                            <li className='CUSpan'>Sunday - Closed</li>
                        </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    );
};

export default Address;