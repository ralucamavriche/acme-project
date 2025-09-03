import React from 'react';
import Button from '../../components/Button';

const Home: React.FC = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold">Home Page</h1>
    <Button onClick={() => alert('cliked')}>Click Me</Button>
  </div>
);

export default Home;
