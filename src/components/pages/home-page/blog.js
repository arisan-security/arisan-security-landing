import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const stripHtmlAndTruncate = (htmlContent, maxLength) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    let plainText = tempDiv.textContent || tempDiv.innerText || "";
  
    const decodeHtmlEntities = (str) => {   
      return str.replace(/&[a-zA-Z0-9#]+;/g, "");
    };
  
    const decodedText = decodeHtmlEntities(plainText);
  
    return decodedText.length > maxLength ? decodedText.slice(0, maxLength).trim() + "..." : decodedText;
  };
const fetchBlogPosts = async () => {
    const res = await fetch(
      `https://www.blogger.com/feeds/2512754821872241729/posts/default?alt=json`
    );
    const data = await res.json();
  
    const posts = data.feed.entry.slice(0,3).map((entry) => {
      const author = entry.author[0].name.$t;
      const content = entry.content.$t; 
      const title = entry.title.$t; 
      const url = entry.link.find((link) => link.rel === "alternate").href; 
      
      const imageUrl = content.match(/<img.*?src="(.*?)"/)?.[1] || null;

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

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);

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
    <section className="min-h-[80vh] pt-12 mt-[-30px] md:mt-0 md:pt-0 px-8 pb-10 snap-start bg-gray-100" id="blog-section">
  <div className="text-center" data-aos={"fade-up"}>
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-red-600 mb-3">Blog</h2>
    <p className="text-2xl lg:text-3xl leading-none font-bold text-gray-800 tracking-tight mb-4 relative inline-block">
      Buah Pena Dari Kontributor
    </p>
  </div>

  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-0 md:px-24">
    {posts.map((post, index) => {
      const imageUrl = post.imageUrl || '/default-image.jpg'; 

      return (
        <div key={index} className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            <div className="w-full aspect-video">
              <img className="object-cover w-full h-full object-fill" src={imageUrl} alt={post.title} />
            </div>
          </a>
          <div className="p-6 bg-white">
            <div className="flex flex-col mb-2">
              <span>{post.author}</span>
              <span className="font-[900] text-black text-lg">{post.title}</span>
            </div>
            <p className="text-gray-700 mb-4 text-justify">{stripHtmlAndTruncate(post.content, 150)}
            <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 ml-2"
                    >
                        <br />
                      See more
                    </a>
            </p>
            
          </div>
        </div>
      );
    })}
  </div>

  {/* Call To Action Button */}
  <div className="mt-16 text-center flex flex-col justify-center items-center " data-aos={"fade-up"}>
         Ingin menjadi kontributor blog kami? Kirim tulisanmu sekarang!
    <MdKeyboardDoubleArrowDown id="cta-icon" fontSize={24} className="animate-bounce mt-4 cursor-pointer" />
    
  </div>
</section>
  );
}