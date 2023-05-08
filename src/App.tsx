import "./App.scss";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header/Header";
import { Blurb } from "./components/Blurb/Blurb";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";
import { ProjectShowcase } from "./components/ProjectShowcase/ProjectShowcase";
import { Contact } from "./components/Contact/Contact";
import { Blog } from "./components/Blog/Blog";
import { Education } from "./components/Education/Education";
function App() {
  return (
    <Container className="content">
      <Header />
      <Blurb />
      <ProjectShowcase />
      <WorkExperience />
      <Education />
      <Contact />
      <Blog />
    </Container>
  );
}

export default App;
