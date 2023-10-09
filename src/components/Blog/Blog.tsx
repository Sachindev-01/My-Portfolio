import { blogs } from "../../utils/constant";
import SandwitchIcon from "../icons/SandwichIcon";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="py-44 px-2 lg:px-14 min-h-screen">
      <div>
        <div className="flex items-center gap-2">
          <SandwitchIcon />
          <h3 className="text-2xl lg:text-4xl text-[#d4e9fb] font-font-calibre">
            Blogs
          </h3>
        </div>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {blogs && blogs.map((blog) => <BlogCard blog={blog} />)}
        </div>
      </div>
    </section>
  );
};

export default Blog;
