import ProjectItem from "../components/ProjectItem";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";

const Projects = ({ projects }) => {
  return (
    <motion.section
      className="Projects py-3 grid-gap mr"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {projects &&
        projects
          .sort((a, b) => b.id - a.id)
          .map((post) => (
            <ProjectItem
              cover={post.thumbnail}
              title={post.title}
              intro={post.intro}
              body={post.body}
              slug={post.slug}
              tags={post.tags}
              key={post.id}
            />
          ))}
    </motion.section>
  );
};

export default Projects;
