import { motion } from "framer-motion";
import { containerVariants, postVariants } from "../animation/variants";

const Uses = ({ uses }) => {
  return (
    <motion.section
      className="Uses py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="Uses-title lg">
        These are awesome tools and services that I use to build things.
      </h1>
      {uses &&
        uses.map((use) => (
          <motion.article
            className="Uses-item text-spacing py-2"
            variants={postVariants}
            key={use.id}
          >
            <h2 className="lead my-1">{use.title}</h2>
            <ul className="md">
              {use.items &&
                use.items
                  .sort((a, b) => a.id - b.id)
                  .map((editor) => <li key={editor.id}>{editor.name}</li>)}
            </ul>
          </motion.article>
        ))}
    </motion.section>
  );
};

export default Uses;
