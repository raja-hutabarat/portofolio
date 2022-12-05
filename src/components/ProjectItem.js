import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { postVariants } from "../animation/variants";

const ProjectItem = ({ cover, title, intro, body, slug, tags }) => {
  return (
    <Link to={"/projects/" + slug} className="my-3">
      <motion.div className="Projects-item grid-gap" variants={postVariants}>
        <img src={cover.url} alt={title} />
        <div className="Projects-item-label">
          <h2 className="lead my-1">{title}</h2>
          <ul>
            {tags &&
              tags.map((tag) => (
                <li className="btn sm text-spacing" key={tag.id}>
                  {tag.title}
                </li>
              ))}
          </ul>

          <p className="md my-1">{intro}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectItem;
