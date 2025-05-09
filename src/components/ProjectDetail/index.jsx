import Tag from "../Tag";
import "./style.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function ProjectDetail({ proj }) {
  return (
    <div className="container row project-detail">
      <div className="col-lg-6 col-md-6 col-sm-12 mb-2 d-flex align-items-center">
        <img
          src={
            proj.Img
              ? `https://portfolio-backend-zeta-eight.vercel.app/img/${encodeURIComponent(proj.Img)}`
              : "./projects/placeholder.png"
          }
          alt={proj.ProjectName}
          className="project-detail-img"
          data-tooltip-id="tooltip"
          data-tooltip-content={proj.Desc}
          onError={(e) => {
    e.currentTarget.src = placeholder;
    e.currentTarget.onerror = null; 
  }}
  crossOrigin="anonymous"
        />
        <ReactTooltip id="tooltip" place="top" effect="solid" />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
        <div className="card-content p-1">
          <h3 className="card-title text-start my-2">{proj.ProjectName}</h3>
          <div className="card-tags text-start mb-2">
            {proj.Tags.map((t) => (
              <Tag key={t._id} tag={t} />
            ))}
          </div>
          
        </div>
        <p className="card-text text-start">{proj.Details}</p>
        <div className="d-flex flex-row justify-content-end mt-2">
          <a
            href={proj.Link}
            data-tooltip-id="tooltip"
            data-tooltip-content="Go to the project"
          >
            <i className="fa-solid fa-globe fs-2 text-dark me-3 link"></i>
          </a>
          <a
            href={proj.Repo}
            data-tooltip-id="tooltip"
            data-tooltip-content="Go to the repo"
          >
            <i className="fa-brands fa-github fs-2 text-dark link"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
