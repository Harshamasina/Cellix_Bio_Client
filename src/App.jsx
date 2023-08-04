import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Navbar/Header';
import Footer from './Components/Footer/Footer';
import GoToTopBtn from './Components/Body/GoToTopBtn';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Helmet>
            <title>Cellix Bio</title>
            <meta name="description" content="Cellix Bio's Informative Web Application for its Intellectual Property" />
            <meta property="og:image" content="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/cellix+bio+meta+img.png" />
            <meta name='description' content='Cellix Bio Informative Web Application for its Patents and Infrastructure' />
            <meta name='keywords' content='Cellix Bio, AvacaPharma, Cellix Bio Pharma, Mahesh Kandula, Mahesh Kandula Patents, Cellix Bio Net Worth, Prism Science' />
          </Helmet>
          <Header />
          <Footer />
        </BrowserRouter>
        <GoToTopBtn />
    </div>
  )
};

export default App;
