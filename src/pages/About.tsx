import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <Helmet>
        <title>About | Irsyad Portfolio</title>
      </Helmet>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="prose">
          <p>[Your professional summary and background]</p>
        </div>
      </div>
    </>
  );
};

export default About;
