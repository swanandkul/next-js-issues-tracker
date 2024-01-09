import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  return (
    <div>
      {pathnames.length > 0 && <Link to="/">Home</Link>}
      {pathnames.map((path, index) => {
        breadcrumbPath += path;
        const lastIndex = index === pathnames.length - 1;
        return lastIndex ? (
          <span key={index}>/{path}</span>
        ) : (
          <Link to={breadcrumbPath} key={index}>
            <span>{`/${path}`}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
