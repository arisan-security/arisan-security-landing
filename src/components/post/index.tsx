import Image from "next/image";

export interface PostProps {
  title: string;
  cover: string;
  author: string;
}

/**
 * Post card component for displaying a blog post preview.
 * Uses Next.js Image for optimized cover images.
 */
const Post: React.FC<PostProps> = ({ title, cover, author }) => {
  return (
    <div className="shadow-sm hover:shadow-lg rounded-lg block bg-white">
      <Image
        alt={title}
        src={cover}
        width={400}
        height={240}
        className="object-contain w-full h-60 mx-auto"
        style={{ objectFit: "contain" }}
        priority
      />
      <div className="p-3 pb-4">
        <p className="text-gray-700 font-semibold">{author}</p>
        <h3 className="text-2xl text-blue-500 font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default Post;
