import { Container } from "react-bootstrap";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faItchIo,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export const Contact: React.FC<any> = (props: any) => {
  return (
    <Container>
      <h2>Contact</h2>
      <p className="icons d-flex gap-4 justify-content-center">
        <a href="mailto:liam@liamcoll.com" title="Email" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/liam-coll/"
          title="Linkedin"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCbChr404bLEXYuR_uXWnb6A"
          title="YouTube"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} enableBackground={1} />
        </a>
      </p>
    </Container>
  );
};
