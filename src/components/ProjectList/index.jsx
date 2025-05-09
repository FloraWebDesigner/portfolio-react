import { useState, useEffect } from "react";
import ProjectThumbnail from "../ProjectThumbnail";
import ProjectDetail from "../ProjectDetail";
import Title from "../Title";
import "./style.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function ProjectList() {
  const [projList, setProjList] = useState([]);
  const [viewMode, setViewMode] = useState("grid"); 

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        "https://portfolio-backend-zeta-eight.vercel.app/api/project/list"
        // "https://portfolio-backend-vercel-three.vercel.app/api/project/list"
      );
      const data = await response.json();
      setProjList(data);
    };
    fetchProjects();
  }, []);

  return (
    <section className="container-fluid" id="projects">
      <Title title="Projects" description={"A collection of projects I've worked on."} />
      <div className="view mx-auto d-flex justify-content-center">
        <i
        className={`fa-solid fa-table-cells fs-3 me-3 ${
          viewMode === "grid" ? "active-view" : ""
        }`
      }
        onClick={() => setViewMode("grid")}
        role="button"
        title="Grid view"
        data-tooltip-id="tooltip"
        data-tooltip-content="a grid overview"
      ></i>
      <i
        className={`fa-solid fa-list fs-3 me-3 ${
          viewMode === "list" ? "active-view" : ""
        }`}
        onClick={() => setViewMode("list")}
        role="button"
        title="List view"
        data-tooltip-id="tooltip"
        data-tooltip-content="project details"
      ></i>
    </div>

    <div className={viewMode === "grid" ? "project-grid" : "project-list"}>
      {projList.length === 0 ? (
        <p className="text-center">Loading projects...</p>
      ) : (
        projList.map((proj) => (
          <div key={proj._id}>
            {viewMode === "grid" ? (
              // Grid-specific styles
              <div className="p-2 border border-1 border-dark grid-item">
                <ProjectThumbnail proj={proj} />
              </div>
            ) : (
              // List-specific styles
              <div className="p-3 custom-list-style">
                <ProjectDetail proj={proj} />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  </section>
);
}