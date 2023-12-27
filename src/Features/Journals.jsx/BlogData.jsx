import { Link } from "react-router-dom";

const BlogData = ({ blogs }) => {
  return (
    <>
      <div className="grid-2_cols">
        <Link to="/blogs/designs" className="design-link">
          <div>
            <img src={blogs.image} alt={blogs.title} className="grid-2-image" />
            <h2 className="secondary-header">{blogs.title}</h2>
            <div className="design-div">
              <p className="text-description">
                <strong>{blogs.publishedDate}</strong>
              </p>
              <li className="text-description list">{blogs.author}</li>
            </div>
            <p className="text-description design-text">{blogs.description}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogData;
