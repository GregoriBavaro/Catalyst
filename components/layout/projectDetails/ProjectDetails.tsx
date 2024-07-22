import classes from "./ProjectDetails.module.scss";

interface ProjectDetailsProps {
  data: {
    id: number;
    path: string;
    client: string;
    clientIndustry: string;
    clientDescription: string;
    projectDescription: string;
    projectShortDescription: string;
    challenges: string;
    solutions: string;
    results: string;
    duration: string;
    projectLink: string;
    service: string[];
  };
}

const ProjectDetails = ({ data }: ProjectDetailsProps) => {
  return (
    <section className={classes.projectDetails}>
      <div className={classes.projectDetails__info}>
        <div className={classes.projectDetails__info__left}>
          <div>
            <h1>Client</h1>
            <p>{data.clientDescription}</p>
            <a href={data.projectLink} target="_blank" rel="noopener noreferrer">
              {data.projectLink}
            </a>
          </div>
          <div>
            <h1>Industry</h1>
            <p>{data.clientIndustry}</p>
          </div>
          <div>
            <h1>Duration</h1>
            <p>{data.duration}</p>
          </div>
          <div>
            <h1>Services</h1>
            <ul>
              {data.service.map((item) => (
                <li key={item}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.projectDetails__info__right}>
          <div>
            <h1>Project description</h1>
            <p>{data.projectDescription}</p>
          </div>
          <div>
            <h1>The challenge</h1>
            <p>{data.challenges}</p>
          </div>
          <div>
            <h1>The solution</h1>
            <p>{data.solutions}</p>
          </div>
          <div>
            <h1>The result</h1>
            <p>{data.results}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
