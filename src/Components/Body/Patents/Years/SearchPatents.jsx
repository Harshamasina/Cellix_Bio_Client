import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";
import { BiErrorAlt } from 'react-icons/bi';
import axios from 'axios';
import { ProgressBar } from  'react-loader-spinner';

const SearchPatents = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchPatent, setSearchPatent] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (searchTerm) {
                setIsLoading(true);
                try {
                    const response = await axios.get(`${import.meta.env.VITE_API_URL}/patents/${searchTerm.replaceAll("/", "%2F")}`);
                    setSearchPatent(response.data);
                    setError('');
                } catch (error) {
                    console.log(error);
                    setSearchPatent([]);
                    setError(error.message);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setSearchPatent([]);
                setError('');
            }
        };
        fetchSearchResults();
    }, [searchTerm]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const highlightStyle = {
        backgroundColor: 'rgba(14, 110, 89, 0.15)',
        fontWeight: '600',
        borderRadius: '5px',
    };

    return (
        <div>
            <div className="SearchPatentsh2Container">
                <h3 className="SearchPatentsh2">Cellix Bio Patent Intelligence</h3>
            </div>
            <div>
                <div className="SearchPatentContainer">
                    <input 
                        onChange={handleSearch} 
                        className="SearchBarPatents" 
                        type="search" spellCheck="off" 
                        placeholder="ENTER PATENT APPLICATION NUMBER / PCT NUMBER / THERAPEUTIC AREA / DISEASES"
                   />
                </div>
                <div>
                    {error && <div style={{color: '#0E6E59', fontSize: '40px' }}><span style={{fontSize: "50px", color: "#FF4433"}}><BiErrorAlt /></span>{error}</div>}
                </div>
                {isLoading ? (
                    <div>
                        <ProgressBar
                        visible={true}
                        borderColor="#0E6E59"
                        barColor="#15B39D"
                        wrapperClass="years-loading"
                        />
                    </div>
                ) : searchPatent.length === 0 && searchTerm ? (
                    <div className="searchPatentImg-container">
                        <img
                        className="searchPatentImg"
                        src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Patent+Data+Not+Found.PNG"
                        alt="not Found"
                        ></img>
                    </div>
                ) : (
                    <>
                        {searchPatent.length > 0 && (
                            <p className="search-count">
                                Showing <span style={{color: "#0E6E59", fontWeight: "600"}}>{searchPatent.length}</span> Patent{searchPatent.length !== 1 && 's'}
                            </p>
                        )}
                        {searchPatent.map((patent) => (
                        <div className="CardContainer" key={patent._id}>
                            <Card style={{ width: '90rem' }} className="shadow-lg PatentsCard">
                            <Card.Body>
                                <Card.Title>
                                    <Link className="Wno" to={"/patent/" + patent.wno} target={"_blank"}>
                                        <Highlighter searchWords={searchTerm.split('/')} autoEscape={true} textToHighlight={patent.wno} highlightStyle={highlightStyle} />
                                    </Link>
                                </Card.Title>
                                <div className="cardTextContainer">
                                    <div className="cardTextInfoContainer">
                                        <Card.Text className="CardTextInfo">
                                        <p>
                                            <Highlighter searchWords={searchTerm.split('/')} autoEscape={true} textToHighlight={patent.diseases} highlightStyle={highlightStyle} />
                                        </p>
                                        <p className="CardTextSpanTA">
                                            <span className="CardTextSpan">Therapeutic Area: </span>
                                            <Highlighter searchWords={searchTerm.split('/')} autoEscape={true} textToHighlight={patent.therapeutic_area} highlightStyle={highlightStyle} />
                                        </p>
                                        <p className="CardTextSpanTA">
                                            <span className="CardTextSpan">PCT / Application Number: </span>
                                            <Highlighter searchWords={searchTerm.split('/')} autoEscape={true} textToHighlight={patent.pct} highlightStyle={highlightStyle} />
                                        </p>
                                        </Card.Text>
                                    </div>
                                    <div className="cardTextDateContainer">
                                        <Card.Text>
                                        <p>
                                            <span className="CardTextSpan">Publication Date: </span>
                                            {patent.publication_date}
                                        </p>
                                        </Card.Text>
                                    </div>
                                </div>
                            </Card.Body>
                            </Card>
                        </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
};

export default SearchPatents;