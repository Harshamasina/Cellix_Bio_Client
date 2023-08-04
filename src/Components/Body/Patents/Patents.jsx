import Desc from "./Desc";
import SearchPatents from "./Years/SearchPatents";
import Years from "./Years/Years";
import { Helmet } from 'react-helmet';

const Patents = () => {
    return (
        <>
            <Helmet>
                <title>Patents | Cellix Bio</title>
                <meta name="description" content="Search for patents filed by Cellix Bio World Wide year wise"/>
                <meta name="keywords" content="cellix bio World Wide patents, Cellix Bio Patents, cellix bio pharma World Wide patents, Mahesh Kandula Patents in Cellix Bio,
                    Cellix Bio Patents 2023, Cellix Bio Patents 2022, Cellix Bio Patents 2021, Cellix Bio Patents 2020, Cellix Bio Patents 2019, Cellix Bio Patents 2018, 
                    Cellix Bio Patents 2017, Cellix Bio Patents 2016, Cellix Bio Patents 2015, Cellix Bio Patents 2014 search patents filed by cellix bio, 
                    search patents filed by cellix bio using wipo number and Therapeutic Area,Cellix Bio Patents Search, Patent Scope" 
                />
            </Helmet>
            <Desc />
            <SearchPatents />
            <Years />
        </>
    )
};

export default Patents;