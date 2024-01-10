import { useState, useEffect } from "react";
import BlogData from "./BlogData";

function Designs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(function () {
    async function getProductData() {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        if (!res.ok)
          throw new Error(
            "Something went wrong while loading the blogs from the database."
          );
        const data = await res.json();

        if (data.Response === "False") throw new Error("Blogs not found");
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    }
    getProductData();
  }, []);

  return (
    <>
      <div className="container design-container">
        <h1 className="primary-header h1">Designs</h1>
        <div className="grid-2 blog-grid">
          {blogs &&
            blogs.map((blogs) => {
              return <BlogData blogs={blogs} key={blogs._id} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Designs;
