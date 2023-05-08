import { Container } from "react-bootstrap";

export const Education: React.FC<any> = () => {
  return (
    <>
      <h2>Education</h2>
      <Container className="contentArea">
        <ul>
          <li>
            Bachelor of Creative Technologies
            <br />
            <em>Auckland University of Technology, Auckland</em>
          </li>
        </ul>
      </Container>
    </>
  );
};
