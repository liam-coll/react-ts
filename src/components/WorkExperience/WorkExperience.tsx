import { Container } from "react-bootstrap";
export const WorkExperience: React.FC<any> = (props: any) => {
  return (
    <>
      <h2>Work Experience</h2>
      <Container className="contentArea">
        <ul>
          <li>
            Senior Front End Development Analyst at Accenture Song (Nov 2022 -
            Present)
            <br />
            Continued role within government client. Gained experience in
            developing complex front-end design systems and
            maintaining/implementing code packages on Microsoft Azure. Built a
            frontend system to be used across a platform of work containing
            multiple products. Gained experience in different areas of a product
            lifecycle, including foundation releases, testing,
            hypercare/sustainment roles.
          </li>
          <li>
            Front End Development Analyst at Accenture Song (May 2021 - Nov
            2022).
            <br />
            Worked as a front end developer in various projects across both
            private business and government clients. Designed and developed
            complex and accessible front end solutions within a cross functional
            team for a key government client. Represented broader delivery team
            and demonstrated key development milestones at stakeholder showcases
            with over 100 attendees. Experienced working in small development
            teams and working tightly with an integrated design/UI/UX team.
            Utilised the following technologies and skills to deliver digital
            services to over 90,000 customers:
            <ul>
              <li>React.js</li> <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Storybook.js</li>
              <li>CSS/SASS</li>
              <li>HTML</li>
              <li>Adobe Experience Manager</li>
              <li>Pega Systems (Cosmos)</li>
              <li>Human-centred design</li>
              <li>Agile methodologies</li>
              <li>Accessibility tools (Wave, Axe, Lighthouse)</li>
            </ul>
          </li>
          <li>
            Casual Project Support at Nanogirl Labs (January 2020 - April 2020).
            Assisted with the coordination and execution of a weekend-long
            event, and assisted wherever else I could, such as video editing,
            production assistant on a film set, office planning etc.
          </li>
          <li>
            Event Service Attendant at Auckland Live (February 2018 - May 2021).
            <br />
            In this role I mostly worked behind the bar at three of Auckland's
            largest theaters, as well as ushering, scanning tickets and seating
            patrons. From working in this role I learnt many skills such as
            customer service, teamwork, and working efficiently in a fast paced
            environment.
          </li>
        </ul>
      </Container>
    </>
  );
};
