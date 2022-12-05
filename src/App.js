import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import NavBarMobile from "./components/NavBarMobile";
import ScrollToTop from "./components/ScrollToTop";
import useFetch from "./hooks/useFetch";
import Bookshelf from "./pages/Bookshelf";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectSingle from "./pages/ProjectSingle";
import Thoughts from "./pages/Thoughts";
import ThoughtSingle from "./pages/ThoughtSingle";
import Uses from "./pages/Uses";

function App() {
  const { data: menus } = useFetch("/data/menu.json");
  const { data: socials } = useFetch("/data/social.json");
  const { data: homePosts, isPending: homePending } =
    useFetch("/data/home.json");
  const { data: projects } = useFetch("/data/project.json");
  // const { data: thoughtPosts } = useFetch(
  //   "https://polar-earth-09757.herokuapp.com/posts"
  // );
  const { data: thoughtPosts } = useFetch("/data/thought.json");
  const { data: books } = useFetch("/data/book.json");
  const { data: uses } = useFetch("/data/uses.json");
  const { data: certificates } = useFetch("/data/certifications.json");
  const { data: contact } = useFetch("/data/contact.json");

  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {homePending && <Loading pending={homePending} />}
      </AnimatePresence>

      <ScrollToTop />
      <NavBar menus={menus} socials={socials} pathname={location.pathname} />
      <NavBarMobile menus={menus} pathname={location.pathname} />

      <main className="container">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/projects/:slug">
              <ProjectSingle posts={projects} />
            </Route>
            <Route exact path="/thoughts/:slug">
              <ThoughtSingle posts={thoughtPosts} />
            </Route>
            <Route exact path="/projects">
              <Projects projects={projects} />
            </Route>
            <Route exact path="/thoughts">
              <Thoughts posts={thoughtPosts} />
            </Route>
            <Route exact path="/bookshelf">
              <Bookshelf books={books} />
            </Route>
            <Route exact path="/certifications">
              <Certifications certificates={certificates} />
            </Route>
            <Route exact path="/uses">
              <Uses uses={uses} />
            </Route>
            <Route exact path="/contact">
              <Contact contact={contact} />
            </Route>
            <Route exact path="/">
              <Home homePosts={homePosts} thoughtPosts={thoughtPosts} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer socials={socials} />
      </main>
    </>
  );
}

export default App;
