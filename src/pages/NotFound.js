import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex text-center" style={{ height: "80vh" }}>
      <div>
        <h1>404</h1>
        <p className="my-2">
          Oops. Looks like what you're looking for can't be found.
        </p>
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
