import SideList from "./SideList";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { postVariants } from "../animation/variants";
import { dateFormatter } from "../helpers/dateFormatter";

const PostItem = ({ title, imageUrl, body, sidelists, date, readTime }) => {
  return (
    <motion.article className="PostItem" variants={postVariants}>
      <div className="PostItem-hero grid grid-gap">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="PostItem-body grid grid-gap">
        <h1 className="lg my-2">{title}</h1>
        <div>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>

        <aside className="PostItem-sideList sm">
          {sidelists &&
            sidelists.map((sidelist) => (
              <SideList
                title={sidelist.title}
                items={sidelist.items}
                key={sidelist.id}
              />
            ))}
          {date && (
            <ul>
              <li className="my-1 text-spacing sm">
                <i className="fa fa-calendar"></i>{" "}
                {dateFormatter(date).toUpperCase()}
              </li>
              <li className="my-1 text-spacing sm">
                <i className="fa fa-newspaper-o"></i> {readTime} MIN READ
              </li>
            </ul>
          )}
        </aside>
      </div>
    </motion.article>
  );
};

export default PostItem;
