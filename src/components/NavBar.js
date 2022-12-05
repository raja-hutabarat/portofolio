import NavBarLink from "./NavBarLink";
import NavBarSocial from "./NavBarSocial";
import { motion } from "framer-motion";
import { navVariants } from "../animation/variants";

const NavBar = ({ menus, socials, pathname }) => {
    return (menus && (
        <motion.header className = "NavBar flex"
                        variants = {navVariants}
                         initial = "hidden"
                         animate = "visible" >
            <nav>
                <ul> {
                        menus &&
                        menus.map((menu) => ( 
                          <NavBarLink to = { menu.route }
                                  title = { menu.title }
                                    key = { menu.id }
                            currentPath = { checkCurrentPath(pathname, menu.route) }
                            />
                        ))
                      } 
                </ul> 
            </nav > 
            <div className = "NavBar-social">
                  <ul className = "flex" > {socials &&socials.map(({ link, fa }) => ( 
                          <NavBarSocial link = { link }
                                          fa = { fa }
                                        key = { link }/>
                          ))
                        } 
                  </ul> 
                  <div className = "my-1" >
                    <p className = "sm text-secondary"
                      style = {{lineHeight: "0.5rem"}}> Coded by </p> 
                    <p className = "sm text-secondary"> Donni Muhaedi </p> 
                    <p className = "sm text-secondary"> @2022 </p> 
                  </div> 
            </div> 
        </motion.header>
        )
    );
};

const checkCurrentPath = (pathname, route) => {
    if (pathname === "/" && route === "/") {
        return true;
    } else if (route !== "/") {
        return pathname.includes(route);
    }
};

export default NavBar;