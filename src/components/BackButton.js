import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BackButton = ({ route, title }) => {
  return (
    <Link to={route}>
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            delay: 1,
          },
        }}
        className="lead"
      >
        <i className="fa fa-arrow-left"></i>
        {" " + title}
      </motion.h1>
    </Link>
  );
};

export default BackButton;
