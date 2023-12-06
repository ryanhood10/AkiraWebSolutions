//import the watson assistant:
import WatsonAssistantLoader from './compenents/watsonScript';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './compenents/Footer';
import Header from './compenents/Header';

import Hero from './compenents/Hero';
import Engagement from './compenents/Engagement';


const NewsLetter = React.lazy(() => import('./compenents/NewsLetter'));
const HeadlineCards = React.lazy(() => import('./compenents/HeadlineCards'));




const OtherHero = React.lazy(() => import('./compenents/OtherHero'));
const BookAMeeting = React.lazy(() => import('./compenents/BookAMeeting'));
const Pricing = React.lazy(() => import('./compenents/Pricing'));
const TestimonialsPage = React.lazy(() => import('./compenents/Testimonials'));
const Solutions = React.lazy(() => import('./compenents/Solutions'));
const Video = React.lazy(() => import('./compenents/Video'));
const PrivacyPolicy = React.lazy(() => import('./compenents/PrivacyPolicy'));

// import TestimonialsPage from './compenents/Testimonials';
// import Solutions from './compenents/Solutions'
// import Calendly from './compenents/Calandly';
// import OurPartners from './compenents/OurPartners';
// import Video from './compenents/Video';
// import PrivacyPolicy from './compenents/PrivacyPolicy';

// import './index.css';


function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Router>
      <div className="main-container">
        <Header />
        
        <Routes>
          <Route
            path="/"
            element={<React.Fragment>
              <Hero />
        <Engagement />
        <HeadlineCards />
        <NewsLetter />
        {/* <OurPartners /> */}
            </React.Fragment>
            }
          />
          <Route
            path="/CaseStudies"
            element={ <React.Fragment>
                <OtherHero />
                <TestimonialsPage />
                </React.Fragment>
            }
          />
          <Route
            path="/solutions"
            element={<React.Fragment>
                <OtherHero />
                <Solutions />
                < Video />

                <BookAMeeting />
                <NewsLetter />
            </React.Fragment>}
          />
          <Route
            path="/Connect"
            element={<React.Fragment>
              <OtherHero />
              <NewsLetter />
            </React.Fragment>}
          />

          <Route
            path="/PrivacyPolicy"
            element={ <React.Fragment>
                <PrivacyPolicy/>
                </React.Fragment>
            }
          />

<Route
            path="/Pricing"
            element={ <React.Fragment>
                <Pricing/>
                </React.Fragment>
            }
          />

          
        </Routes>
      </div>

{/* WATSON ASSISTANT SCRIPT BEING PULLED IN VIA REACT */}

                  {/* Other components and content */}
                  <WatsonAssistantLoader />
   
           

      <Footer />
    </Router>
  );
}

export default App;
