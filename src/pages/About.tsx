import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About Me</h1>
      <div className="prose">
        <p>[Your professional summary and background]</p>
      </div>
    </div>
  );
};

export default About;
