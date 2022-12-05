import PostItem from "../components/PostItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";
import { readTime } from "../helpers/readTime";

const Thoughts = ({ posts }) => {
  return (
    <motion.section
      className="Thoughts mr py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {posts &&
        posts
          .sort((a, b) => b.id - a.id)
          .map((post) => (
            <div className="Thoughts-item" key={post.id}>
              <Link to={"/thoughts/" + post.slug}>
                <PostItem
                  title={post.title}
                  imageUrl={post.imageUrl}
                  body={trimBody(post.body, 150) + "..."}
                  date={post.created_at}
                  readTime={readTime(post.body)}
                />
              </Link>
            </div>
          ))}
    </motion.section>
  );
};

const trimBody = (body, length) => {
  let trimmedString = body.substr(0, length);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );
  return trimmedString;
};

export default Thoughts;
