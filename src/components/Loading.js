import { motion } from "framer-motion";

const loaderVariants = {
  animation1: {
    y: [0, -50],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  exit: {
    x: 0,
    y: "100vh",
    transition: {
      duration: 1,
    },
  },
};

const containerVariants = {
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  },
};

const Loading = ({ pending }) => {
  return (
    <motion.section
      className="Loading flex"
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        backgroundColor: "#fbfbfb",
        zIndex: 99,
        flexDirection: "column",
      }}
      variants={containerVariants}
      exit="exit"
    >
      {pending && (
        <div>
          <motion.div
            className="Loader-dot my-2"
            variants={loaderVariants}
            animate="animation1"
            exit="exit"
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#000",
            }}
          ></motion.div>
        </div>
      )}
      <h2 className="sm text-spacing ">LOADING DATA..</h2>
    </motion.section>
  );
};

export default Loading;
