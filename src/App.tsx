import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import Build from "./components/Build";
import Logos from "./components/Logos";
import Mentors from "./components/Mentors";
import WhyDecagon from "./components/WhyDecagon"; 
import When from "./components/When";
import Qualities from "./components/Qualities";
import How from "./components/How";
import Leadership from "./components/Leadership";
import FAQs from "./components/FAQs";
import Skills from "./components/Skills"; 
import Hire from "./components/Hire"; 

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Build/>
    <Logos/>
    <Mentors/>
    <WhyDecagon/>
    <When/>
    <Qualities/>
    <How/>
    <Leadership/>
    <FAQs/>
    <Skills/>
    <Hire/>
    </Router>
    </>
  );
}

export default App;
