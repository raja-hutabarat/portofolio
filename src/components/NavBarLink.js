import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBarLink = ({ to, title, currentPath }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <li>
      <Link
        className={
          (currentPath ? "bold NavBar-logo" : "md x-thin") + " NavBar-link"
        }
        to={to}
      >
        <motion.span
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
        >
          {title}
        </motion.span>

        {isHover && (
          <motion.div
            className="NavBar-link-hover"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ damping: 4 }}
            exit={{ width: "0%" }}
            key={title}
          ></motion.div>
        )}
      </Link>
    </li>
  );
};

export default NavBarLink;
