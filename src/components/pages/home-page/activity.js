import { useEffect, useState } from "react";
import { FaLocationPin } from "react-icons/fa6";

const fetchInstagramFeed = async () => {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`
  );
  const data = await res.json();
  return data;
};

const fetchInstagramProfile = async () => {
  const res = await fetch(
    `https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`
  );
  const data = await res.json();
  return data;
};

export default function Activity() {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Instagram posts and filter out Reels (VIDEO type)
        const feedData = await fetchInstagramFeed();
        const filteredPosts = feedData.data.filter(
          (post) => post.media_type !== "VIDEO"
        );
        setPosts(filteredPosts);

        // Fetch Instagram profile data
        const profileData = await fetchInstagramProfile();
        setProfile(profileData); // Log the profile data
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <section
      className="min-h-screen pt-10 md:pt-24 px-8 pb-24 snap-start"
      id="activity-section"
    >
      <div className="text-center">
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-red-600 mb-3">
          Kegiatan Terkini
        </h2>
        <p className="text-4xl lg:text-3xl leading-none font-bold text-gray-800 tracking-tight mb-8"></p>
      </div>
      <div className="special-collaboration py-16 w-[calc(100%+4rem)] md:w-auto bg-black bg-opacity-80 ml-[-2rem] md:mx-12 md:rounded-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side: Big Logo */}
          <div className="flex-1 flex flex-col justify-center items-center mb-8 md:mb-0">
            <img
              src="/images/indosec-logo-awards.png" // Update with your logo path
              alt="Indosec Summit 2024"
              className="md:;w-full md:max-w-md w-4/5 h-auto flex"
            />
            <div className="flex flex-row items-center md:gap-2 gap-1">
              <p className="text-white font-extrabold text-[32px] md:text-[56px] md:leading-[40px] ">
                24-25
              </p>
              <p className="text-white text-[12px] md:text-[18px]">
                Sept <br /> 2024
              </p>
              <div className="border-l-2 border-red-500 border-solid mx-1 h-[18px]"></div>
              <FaLocationPin className="text-white text-[20px] self-start mt-2" />
              <p className="text-white font-semibold text-[14px] md:text-[18px] mt-2">
                Jakarta Convention Center, <br />
                Indonesia
              </p>
            </div>
          </div>

          {/* Right Side: Event Explanation */}
          <div className="flex-1 p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-lapis-lazuli mb-4 text-white">
              Indosec Awards 2024
            </h2>
            <p className="text-md md:text-xl text-white mb-4 text-justify">
              IndoSec is Indonesia’s largest and most renowned cybersecurity
              event that facilitates knowledge sharing sessions on the most
              pressing topics and a stellar showcase of the latest cybersecurity
              solutions. It provides the ideal setting for great networking
              opportunities that often forge successful collaborations between
              cybersecurity solution providers and public & private
              organisations...
              <a
                href="https://indosecsummit.com/"
                className="text-blue-400 pl-2"
              >
                learn more
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-12 px-0 md:px-24">
        {posts.slice(0, 3).map((post) => {
          const maxLength = 150;
          const truncatedCaption =
            post.caption.length > maxLength
              ? post.caption.substring(0, maxLength) + "..."
              : post.caption;

          return (
            <div
              key={post.id}
              className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-md"
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full aspect-square">
                  <img
                    className="object-cover w-full h-full object-left-top"
                    src={post.media_url}
                    alt={post.truncatedCaption}
                  />
                </div>
              </a>
              <div className="p-4 bg-white">
                <div className="flex items-center mb-2">
                  <span className="font-extrabold text-black">
                    {profile.username}
                  </span>
                </div>
                <p className="">
                  {truncatedCaption}
                  {post.caption.length > maxLength && (
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 ml-2"
                    >
                      See more
                    </a>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
