import BookshelfItem from "../components/BookshelfItem";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";

const Bookshelf = ({ books }) => {
  return (
    <motion.section
      className="Bookshelf py-3 mr"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {books && (
        <>
          <h1 className="lg py-2">
            Currently reading / books I finished reading
          </h1>

          <article className="Bookshelf-content grid-gap">
            {books &&
              books.map((book) => (
                <BookshelfItem
                  cover={book.cover}
                  title={book.title}
                  author={book.author}
                  link={book.link}
                  key={book.id}
                />
              ))}
          </article>
        </>
      )}
    </motion.section>
  );
};

export default Bookshelf;
