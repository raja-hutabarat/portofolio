import PostItem from "../components/PostItem";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";
import PostList from "../components/PostList";

const Home = ({ homePosts, thoughtPosts }) => {
  return (
    <motion.section
      className="Home mr py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {homePosts &&
        homePosts.map((post) => (
          <PostItem
            title={post.title}
            imageUrl={post.thumbnail.url}
            body={post.body}
            key={post.id}
            sidelists={post.sidelists}
          />
        ))}

      {thoughtPosts && (
        <PostList
          title="Thoughts."
          link="/thoughts"
          posts={thoughtPosts.sort((a, b) => b.id - a.id).slice(0, 5)}
        />
      )}
    </motion.section>
  );
};

export default Home;