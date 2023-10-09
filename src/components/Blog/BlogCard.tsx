import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

type BlogProps = {
  title: string;
  image: string;
  blog_url: string;
  language: string;
};

type BlogCardProps = {
  blog: BlogProps;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  const { title, image, blog_url, language } = blog;
  return (
    <div key={title} className="mt-8 p-4 shadow-card rounded-md">
      <div className="overflow-hidden">
        <Link to={blog_url} target="_blank">
          <img
            src={image}
            alt="a note book image"
            className="rounded-md hover:scale-105 transition duration-150 ease-in-out"
          />
        </Link>
      </div>
      <div className="mt-3">
        <p className="text-lg text-[#d4e9fb] font-font-nunito font-bold">
          {title}
        </p>
        <div className="flex items-center justify-between mt-1">
          <p className="font-font-nunito text-slate-400 capitalize">
            {language}
          </p>
          <Link
            to={blog_url}
            target="_blank"
            className="text-xl text-[#3f9eee] hover:scale-150 transition duration-150 ease-in-out"
          >
            <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
