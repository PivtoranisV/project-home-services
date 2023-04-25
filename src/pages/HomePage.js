import React from 'react';
import Footer from '../components/Footer/Footer';
import Feedbacks from '../components/Feedbacks/Feedbacks';
import ServicesSummary from '../components/Services/ServicesSummary';

const HomePage = () => {
  return (
    <>
      <main>
        <ServicesSummary />
        <Feedbacks />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
