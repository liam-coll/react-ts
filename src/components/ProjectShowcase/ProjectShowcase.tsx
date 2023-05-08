import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import data from "../../projects.json";
import "./ProjectShowcase.scss";

export const ProjectShowcase: React.FC<any> = (props: any) => {
  const [selectedProject, setSelectedProject] = useState(0);
  const handleClick = (item: number) => {
    console.log(item);
    setSelectedProject(item);
  };
  const Item = (props: any) => {
    return (
      <Container
        onClick={() => handleClick(props.id)}
        className={`${
          selectedProject === props.id ? "active" : ""
        } border-bottom border-primary projectItem`}
      >
        {props.title}
      </Container>
    );
  };
  return (
    <>
      <h2>Projects</h2>
      <Container className="border border-primary d-flex p-0 h-auto bg-white">
        <Container className="p-0 itemBox">
          {data.map((item, index) => (
            <Item {...item} key={index} id={index} />
          ))}
        </Container>
        <Image
          className="border projectImage"
          src={`/images/${data[selectedProject].imageID}`}
        />
      </Container>
      <Container className="border-bottom border-start border-end border-primary p-3 h-auto bg-white">
        <p>{data[selectedProject].description}</p>
        <p>
          {data[selectedProject].links.map((item) => (
            <>
              <a href={item.url}>{item.text}</a>{" "}
            </>
          ))}
        </p>
      </Container>
    </>
  );
};
