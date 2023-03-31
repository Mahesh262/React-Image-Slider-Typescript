import React from 'react';
import { useRoutes} from 'react-router-dom';
// import About from './RoutesArray/About'
// import Contact from "./RoutesArray/Contact";
// import ContactForm from "./RoutesArray/ContactForm";
// import Details from "./RoutesArray/Details";
import Routs from './RoutesArray/Routs';


const App = () => {
  const routing = useRoutes(Routs);

  return (
    <div>
      <h1>My App</h1>
      {routing}

    </div>
  );
};

export default App;
