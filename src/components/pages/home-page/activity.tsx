import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FaLocationPin } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

interface InstagramPost {
  _id: string;
  caption: string;
  imageUrl: string;
  permalink: string;
  publisher: { username: string };
  createdAt: string;
}

interface FeaturedEvent {
  title: string;
  description?: { id?: string; en?: string };
  link?: string;
  imageUrl: string;
}

const Activity: React.FC = () => {
  const t = useTranslations('Activity');
  const locale = useLocale() as "id" | "en";
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [event, setEvent] = useState<FeaturedEvent | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async <T,>(url: string, onData: (data: T) => void) => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        onData(await response.json());
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        console.error(`Error fetching ${url}:`, error);
      }
    };
    fetchData("/api/instagram", setPosts);
    fetchData("/api/featured-event", setEvent);
    return () => controller.abort();
  }, []);

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 3),
    [posts]
  );

  return (
    <div className="bg-dark-blue">
      <section className="pt-10 px-8 md:px-[10%] max-w-[1440px] 2xl:max-w-[1680px] m-auto snap-start bg-dark-blue" id="activity-section">
        <div className="text-center">
          <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide text-white text-[24px] mb-10">
            {t('title')}
          </h2>
        </div>
        {event && (
          <div className="special-collaboration pt-5 md:px-16 w-full pb-24 md:w-auto bg-gradient-to-b bg-opacity-20 md:mt-12 md:rounded-[30px] shadow-inner"
            style={{
              backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, 0) 78%)',
            }}
          >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
              {/* Left Side: Big Logo */}
              <div className="hidden md:flex flex-col w-[40%] justify-center items-center mb-8 md:mb-0">
                <Image
                  unoptimized
                  src={event.imageUrl}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-[80%] h-auto"
                />
              </div>
              {/* Right Side: Event Explanation */}
              <div className="flex-1 px-8 md:w-[60%]">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {event.title}
                </h2>
                <hr />
                <p className="text-sm mt-4 text-white mb-4 text-justify whitespace-pre-line">
                  {event.description?.[locale] || event.description?.id}
                  {event.link && (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 pl-2">
                      {t('seeMore')}
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4 px-0 ${event ? "mt-[-3rem]" : ""}`}>
          {sortedPosts.map((post) => {
            const maxLength = 150;
            const truncatedCaption =
              post.caption.length > maxLength
                ? post.caption.substring(0, maxLength) + "..."
                : post.caption;
            return (
              <div
                key={post._id}
                className="flex flex-col border border-gray-200 rounded-b-none rounded-t-[30px] overflow-hidden shadow-md"
              >
                <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                  <div className="w-full aspect-square relative">
                    <Image
                      fill
                      unoptimized
                      className="object-cover object-left-top"
                      src={post.imageUrl}
                      alt={truncatedCaption}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </a>
                <div className="p-4 bg-white">
                  <div className="flex items-center mb-2">
                    <span className="font-extrabold text-black">
                      {post.publisher.username}
                    </span>
                  </div>
                  <p>
                    {truncatedCaption}
                    {post.caption.length > maxLength && (
                      <a
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 ml-2"
                      >
                        {t('seeMore')}
                      </a>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Activity;
