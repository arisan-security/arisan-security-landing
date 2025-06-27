import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import PostCard from '@/components/cards/PostCard';

interface BlogPost {
  author: string;
  title: string;
  content: string;
  url: string;
  imageUrl: string | null;
}

const stripHtmlAndTruncate = (htmlContent: string, maxLength: number): string => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    let plainText = tempDiv.textContent || tempDiv.innerText || "";
  
    const decodeHtmlEntities = (str: string) => {   
      return str.replace(/&[a-zA-Z0-9#]+;/g, "");
    };
  
    const decodedText = decodeHtmlEntities(plainText);
  
    return decodedText.length > maxLength ? decodedText.slice(0, maxLength).trim() + "..." : decodedText;
  };
const fetchBlogPosts = async (): Promise<BlogPost[]> => {
    const res = await fetch(`/api/blogger`);
    const data = await res.json();
  
    const posts = data.feed.entry.slice(0,3).map((entry: any) => {
      const author = entry.author[0].name.$t;
      const content = entry.content.$t; 
      const title = entry.title.$t; 
      const url = entry.link.find((link: any) => link.rel === "alternate").href; 
      
      const imageUrl = content.match(/<img.*?src=\"(.*?)\"/)?.[1] || null;

      return {
        author,
        title,
        content,
        url,
        imageUrl,
      };
    });
  
    return posts; 
  };

const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await fetchBlogPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching Blogger posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section 
      className="flex flex-col md:grid md:[grid-template-columns:33%_auto] pt-5 px-12 md:px-[calc(10%+48px)] max-w-[1440px] 2xl:max-w-[1680px] m-auto pb-12 md:gap-4 snap-start" 
      id="blog-section"
    >
      {/* Blog Section Header */}
      <div className="w-full md:w-auto text-left mb-8 md:mb-0" data-aos="fade-up">
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide text-catacean-blue">Blog</h2>
        <p className="text-3xl leading-none font-bold text-catacean-blue tracking-tight mb-4 relative inline-block">
          Buah Pena Dari Kontributor
        </p>
        <div className="mt-5 flex flex-col text-davys-gray" data-aos="fade-up">
          Ingin menjadi kontributor blog kami? <br /> <span className="font-extrabold">Kirim tulisanmu sekarang!</span>
            <MdKeyboardDoubleArrowDown id="cta-icon" fontSize={24} className="animate-bounce mt-4 cursor-pointer self-center hidden md:block" />
        </div>
      </div>
      {/* Post Section */}
      <div className="w-full md:mx-0">
        <div
          className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x md:snap-none px-4 md:px-0 flex-nowrap"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {posts.map((post, index) => {
            const imageUrl = post.imageUrl || '/default-image.jpg'; 
            return (
              <div
                key={index}
                className="min-w-full md:min-w-0 md:w-auto snap-center md:snap-none flex-shrink-0 md:flex-shrink flex justify-center"
              >
                <div className="w-full max-w-[280px] py-5 md:max-w-none">
                  <PostCard
                    author={post.author}
                    title={post.title}
                    // description={stripHtmlAndTruncate(post.content, 150)}
                    imgUrl={imageUrl}
                    actionLink={post.url}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
