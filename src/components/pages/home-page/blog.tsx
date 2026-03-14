import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Slider from "react-slick";
import PostCard from '@/components/cards/PostCard';

interface BlogPost {
  author: string;
  title: string;
  content: string;
  url: string;
  imageUrl: string | null;
}

const stripHtmlAndTruncate = (htmlContent: string, maxLength: number): string => {
    const plainText = htmlContent
      .replace(/<[^>]*>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, " ")
      .replace(/&[a-zA-Z0-9#]+;/g, "");
    return plainText.length > maxLength ? plainText.slice(0, maxLength).trim() + "..." : plainText;
  };
const fetchBlogPosts = async (signal?: AbortSignal): Promise<BlogPost[]> => {
    const res = await fetch(`/api/blogger`, { signal });
    const data = await res.json();

    if (!data.feed || !Array.isArray(data.feed.entry)) {
      throw new Error("Invalid response from blog API");
    }

    const posts = data.feed.entry.slice(0, 8).map((entry: any) => {
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

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const SliderArrow: React.FC<{ direction: "next" | "prev"; onClick: () => void }> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="block hover:opacity-70 transition-opacity"
    aria-label={direction === "next" ? "Next slide" : "Previous slide"}
  >
    <svg width="63" height="10" viewBox="0 0 63 10" fill="none">
      {direction === "next" ? (
        <>
          <line x1="0" y1="5" x2="57" y2="5" stroke="#11005C" strokeWidth="2" strokeLinecap="round" />
          <path d="M57 1L62 5L57 9" stroke="#11005C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <line x1="6" y1="5" x2="63" y2="5" stroke="#11005C" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 1L1 5L6 9" stroke="#11005C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  </button>
);

const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const isClient = useSyncExternalStore(() => () => {}, () => true, () => false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const postsData = await fetchBlogPosts(controller.signal);
        setPosts(postsData);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        console.error("Error fetching Blogger posts:", error);
        setError(true);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  return (
    <section
      className="flex flex-col md:grid md:[grid-template-columns:33%_auto] pt-5 px-12 md:px-[calc(10%+48px)] max-w-[1440px] 2xl:max-w-[1680px] m-auto pb-12 md:gap-4 snap-start"
      id="blog-section"
    >
      {/* Blog Section Header */}
      <div className="w-full md:w-auto text-left mb-8 md:mb-0">
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide text-catacean-blue">Blog</h2>
        <p className="text-3xl leading-none font-bold text-catacean-blue tracking-tight mb-4 relative inline-block">
          Buah Pena Dari Kontributor
        </p>
        <div className="mt-5 flex flex-col text-davys-gray">
          Ingin menjadi kontributor blog kami? <br /> <span className="font-extrabold">Kirim tulisanmu sekarang!</span>
          <MdKeyboardDoubleArrowDown id="cta-icon" fontSize={24} className="animate-bounce mt-4 cursor-pointer self-center hidden md:block" />
        </div>
      </div>
      {/* Post Slider */}
      <div className="w-full min-w-0 overflow-hidden relative">
        {error ? (
          <div className="flex justify-center items-center h-32">
            <p className="text-davys-gray">Gagal memuat artikel.</p>
          </div>
        ) : isClient && posts.length > 0 ? (
          <>
            <Slider ref={sliderRef} {...sliderSettings}>
              {posts.map((post, index) => {
                const imageUrl = post.imageUrl || "/default-image.jpg";
                return (
                  <div key={index} className="px-2 py-5">
                    <PostCard
                      author={post.author}
                      title={post.title}
                      imgUrl={imageUrl}
                      actionLink={post.url}
                    />
                  </div>
                );
              })}
            </Slider>
            <div className="flex gap-3 mt-4 justify-center">
              <SliderArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
              <SliderArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-32">
            <p className="text-davys-gray">Memuat artikel...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPosts;
