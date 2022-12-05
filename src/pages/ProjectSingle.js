import { useParams } from "react-router";
import SideList from "../components/SideList";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { containerVariants, postVariants } from "../animation/variants";
import BackButton from "../components/BackButton";

const ProjectSingle = ({ posts }) => {
    const { slug } = useParams();
    let post = null;

    if (posts) {
        post = posts.find((post) => post.slug === slug);
    }

    return ( 
    <motion.section className = "ProjectSingle py-4"
        variants = { containerVariants }
        initial = "hidden"
        animate = "visible"
        exit = "exit" > {
            post && ( < motion.article variants = { postVariants } >
                <div className = "ProjectSingle-body grid" >
                <h1 className = "lg my-1" > { post.title } </h1>  
                <ReactMarkdown > { post.intro } </ReactMarkdown>
                <aside className = "ProjectSingle-sideList sm" > {
                    post.techStack && ( 
                    <SideList title = "TECH STACK"
                        items = { post.techStack }/>
                    )
                } 
                </aside>  
                </div>  
                <div className = "ProjectSingle-hero grid" > {
                    post.thumbnail && ( <
                        img src = { post.thumbnail.url }
                        alt = { post.title }
                        className = "py-3" / >
                    )
                } 
                </div>  
                <div className = "ProjectSingle-action grid" > {
                    post.previewUrl && ( 
                        <a href = { post.previewUrl }
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className = "btn btn-lg md text-center" >
                        PLAY STORE < i className = "fa fa-play" > </i>  
                        </a>
                    )
                } {
                    post.sourceUrl && ( 
                        <a href = { post.sourceUrl }
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className = "btn btn-secondary btn-lg md text-center" >
                        APP STORE < i className = "fa fa-store" > </i>  
                        </a>
                    )
                } 
                </div>  
                </motion.article>
            )
        } 
        <div className = "BackButton btn"
        style = {
            { marginTop: "3rem" }
        } >
        <BackButton route = "/projects"
        title = "BACK TO PROJECTS" / >
        </div>  
        </motion.section >
    );
};

export default ProjectSingle;