import { Link } from "react-router-dom";
import { projectList } from "../data/data";
import styles from "../styles/Sidebar.module.css";

export const Sidebar = () => {
  return (
    <>
      <div className={styles["sidebar-container"]}>
        <ul className={styles["navigation-links"]}>
          {projectList.map((project, index) => (
            <li key={index} className={styles["link"]}>
              <Link
                to={project.href}
                onClick={() => {
                  document.title = project.name;
                }}
              >
                {index} &ndash; {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
