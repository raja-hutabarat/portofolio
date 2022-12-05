import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import BackButton from "./BackButton";

const NavBarMobile = ({ menus, pathname }) => {
  const [active, setActive] = useState(false);

  return (
    <AnimatePresence>
      <div className="NavBarMobile flex py-2" key="abc">
        {menus && getTitlePath(menus, pathname)}
        <div
          onClick={() => setActive(!active)}
          className="NavBarMobile-menu flex"
        >
          <div>
            <i className="NavBarMobile-burger fa fa-navicon lg"></i>
          </div>
        </div>
      </div>

      {active && (
        <motion.div
          className="MobileMenu"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          key="def"
        >
          <motion.nav variants={mobileNavVariants}>
            <div className="MobileMenu-close text-right">
              <i
                className="fa fa-close lg"
                onClick={() => setActive(!active)}
              ></i>
            </div>
            <ul>
              {menus &&
                menus.map((menu) =>
                  menu.route === "blank" ? null : (
                    <Link
                      to={menu.route}
                      key={menu.id}
                      onClick={() => setActive(!active)}
                    >
                      <li className="md py-2">{menu.title}</li>
                    </Link>
                  )
                )}
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const getTitlePath = (menus, pathname) => {
  if (pathname === "/") {
    return <h1 className="text-secondary lg">/HOME</h1>;
  } else if (menus.filter((menu) => menu.route === pathname)[0]) {
    return (
      <motion.h1
        className="text-secondary lg"
        variants={titleVariant}
        initial="hidden"
        animate="visible"
      >
        /{menus.filter((menu) => menu.route === pathname)[0].title}
      </motion.h1>
    );
  } else if (pathname !== "/") {
    const page = menus.filter((menu) => pathname.includes(menu.route))[1];
    return page ? (
      <BackButton route={page.route} title={page.title} />
    ) : (
      <BackButton route="/" title="HOME" />
    );
  }
};

const titleVariant = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: 1 } },
};

const backdrop = {
  hidden: {
    height: "0%",
    backgroundColor: "rgba(0,0,0,0)",
  },
  visible: {
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    transition: {
      type: "tween",
      when: "beforeChildren",
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    height: "0%",
    transition: {
      type: "tween",
      when: "afterChildren",
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const mobileNavVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    x: "100vw",
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default NavBarMobile;
