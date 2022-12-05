import { motion } from "framer-motion";
import { postVariants } from "../animation/variants";

const BookshelfItem = ({ cover, title, author, link }) => {
  return (
    <motion.div
      className="Bookshelf-item grid-gap my-3"
      variants={postVariants}
    >
      <img src={cover.url} alt={cover.alternativeText} />
      <div className="Bookshelf-item-label">
        <h2 className="lead my-1">{title}</h2>
        <p className="sm text-spacing my-1">{author}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-white"
        >
          See on Goodreads <i className="fa fa-external-link"></i>
        </a>
      </div>
    </motion.div>
  );
};

export default BookshelfItem;
