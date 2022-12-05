import PostItem from "../components/PostItem";
import { motion } from "framer-motion";
import { containerVariants, postVariants } from "../animation/variants";

const Contact = ({ contact }) => {
    return ( <
        motion.section className = "Contact mr py-4"
        variants = { containerVariants }
        initial = "hidden"
        animate = "visible"
        exit = "exit" >
        {
            contact && ( 
            <article >
                <PostItem title = "Let's get in touch!"
                body = { contact.intro }
                imageUrl = { contact.thumbnail.url }/> 
                
                <motion.div className = "Contact-item grid grid-gap"
                    variants = { postVariants }>
                    <div>
                        <p><span className = "bold" > Location: </span> 
                        { contact.address } </p> 
                        <p><span className = "bold" > Phone: </span>
                         { contact.phone } </p> 
                         <p><span className = "bold" > Email: </span> 
                        { contact.email } </p> 
                    </div> 
                </motion.div> 
            </article>
            )
        } </motion.section>
    );
};

export default Contact;