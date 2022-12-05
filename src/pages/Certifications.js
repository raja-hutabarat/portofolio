import { motion } from "framer-motion";
import { containerVariants, postVariants } from "../animation/variants";

const Certifications = ({ certificates }) => {
  return (
    <motion.section
      className="Uses py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="Uses-title lg">
        I find joy of growth and always seek to improve and build upon my
        current knowledge.
      </h1>
      {certificates &&
        certificates.map((cert) => (
          <motion.article
            className="certs-item text-spacing py-2"
            variants={postVariants}
            key={cert.id}
          >
            <h2 className="lead my-1">{cert.title}</h2>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="md"
              style={{ textDecoration: "underline" }}
            >
              {cert.institution + " "}
              <i className="fa fa-external-link sm"></i>
            </a>
          </motion.article>
        ))}
    </motion.section>
  );
};

export default Certifications;
