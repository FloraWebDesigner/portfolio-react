import Tag from "../Tag";
import "./style.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function ProjectThumbnail({ proj }) {
  return (
    <div className="card border-0 p-1 d-flex flex-column">
      <img
        src={
          proj.Img
            ? `https://portfolio-backend-zeta-eight.vercel.app/img/${encodeURIComponent(proj.Img)}`
            : "./projects/placeholder.png"
        }
        alt={proj.ProjectName}
        className="project-img"
        data-tooltip-id="tooltip"
        data-tooltip-content={proj.Desc}
        onError={(e) => {
    e.currentTarget.src = placeholder;
    e.currentTarget.onerror = null; 
  }}
  crossOrigin="anonymous"
      />
      <ReactTooltip id="tooltip" place="top" effect="solid" />
      <div className="card-body d-flex flex-column justify-content-between p-1">
        <div className="card-content">
          <h3 className="card-title text-start my-2">{proj.ProjectName}</h3>
          <div className="card-tags text-start">
            {proj.Tags.map((t) => (
              <Tag key={t._id} tag={t} />
            ))}
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end mt-2">
          <a
            href={proj.Link}
            data-tooltip-id="tooltip"
            data-tooltip-content="Go to the project"
          >
            <i className="fa-solid fa-globe fs-2 me-3 link"></i>
          </a>
          <a
            href={proj.Repo}
            data-tooltip-id="tooltip"
            data-tooltip-content="Go to the repo"
          >
            <i className="fa-brands fa-github fs-2 link"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
