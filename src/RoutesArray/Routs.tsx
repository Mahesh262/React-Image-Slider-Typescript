 import About from "./About";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Details from "./Details";
import Home from "./Home";


const Routs = [
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/',
    element: <Home />,
  },
 
  {
    path: '/Contact',
    element: <Contact />,
    children: [
      {
        path: 'ContactForm',
        element: <ContactForm/>,
      },
      {
        path: 'Details',
        element: <Details />,
      },
    ],
  },
];
export default Routs