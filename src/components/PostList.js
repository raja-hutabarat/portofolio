import { postVariants } from "../animation/variants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { dateFormatter } from "../helpers/dateFormatter";

const PostList = ({ title, posts, link }) => {
  return (
    <motion.div className="PostList" variants={postVariants}>
      <div className="PostList-title flex flex-between">
        <h1 className="py-1">{title}</h1>
        <Link to={link} className="btn btn-secondary">
          VIEW ALL
        </Link>
      </div>
      <ul className="my-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={link + "/" + post.slug} className="grid">
              <h4 className="sm text-secondary thin text-spacing">
                {post.created_at &&
                  dateFormatter(post.created_at).toUpperCase()}
              </h4>
              <h3 className="lead text-spacing">{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PostList;
