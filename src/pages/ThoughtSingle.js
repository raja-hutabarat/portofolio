import { useParams } from "react-router";
import PostItem from "../components/PostItem";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";
import { readTime } from "../helpers/readTime";
import BackButton from "../components/BackButton";
import PostList from "../components/PostList";

const ThoughtSingle = ({ posts }) => {
  const { slug } = useParams();
  let post = null;
  let anotherPosts = null;

  if (posts) {
    const index = posts.findIndex((post) => post.slug === slug);
    post = posts[index];
    anotherPosts = posts.slice();
    anotherPosts.splice(index, 1);
  }

  return (
    <motion.section
      className="ThoughtSingle mr py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {post && (
        <PostItem
          title={post.title}
          imageUrl={post.imageUrl}
          body={post.body}
          date={post.created_at}
          readTime={readTime(post.body)}
        />
      )}
      <div className="BackButton btn" style={{ marginBottom: "3rem" }}>
        <BackButton route="/thoughts" title="BACK TO THOUGHTS" />
      </div>
      {anotherPosts && (
        <PostList
          title="Another Thoughts."
          link="/thoughts"
          posts={anotherPosts.sort((a, b) => b.id - a.id).slice(0, 4)}
        />
      )}
    </motion.section>
  );
};

export default ThoughtSingle;
