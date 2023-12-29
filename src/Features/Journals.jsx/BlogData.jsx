import { useNavigate } from "react-router-dom";

const BlogData = ({ blogs }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid-2_cols">
        <div onClick={() => navigate(`/blogs/designs/${blogs._id}`)}>
          <img src={blogs.image} alt={blogs.title} className="grid-2-image" />
          <h2 className="secondary-header">{blogs.title}</h2>
          <div className="design-div">
            <p className="text-description blog-descriptions">
              <strong>{blogs.publishedDate}</strong>
            </p>
            <li className="text-description blog-descriptions list">
              {blogs.author}
            </li>
          </div>
          <p className="text-description design-text blog-description">{blogs.description}</p>
        </div>
      </div>
    </>
  );
};

export default BlogData;
