import React, { useEffect, useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import { client } from "@/utils/sanity";

interface InstagramPost {
  postId: string;
  caption: string;
  imageUrl: string;
  permalink: string;
  publisher: { username: string };
  createdAt: string;
}

const Activity: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/instagram");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-dark-blue">
      <section className="pt-10 px-8 md:px-[10%] max-w-[1440px] 2xl:max-w-[1680px] m-auto snap-start bg-dark-blue" id="activity-section">
        <div className="text-center">
          <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide text-white text-[24px] mb-10">
            Kegiatan Terkini
          </h2>
        </div>
        <div className="special-collaboration pt-5 md:px-16 w-full pb-24 md:w-auto bg-gradient-to-b bg-opacity-20 md:mt-12 md:rounded-[30px] shadow-inner"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, 0) 78%)',
          }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            {/* Left Side: Big Logo */}
            <div className="hidden md:flex flex-col w-[40%] justify-center items-center mb-8 md:mb-0">
              <img
                src="/images/ctf-dr-web.jpeg" 
                alt="Indosec Summit 2024"
                className="w-[80%] h-auto flex"
              />
            </div>
            {/* Right Side: Event Explanation */}
            <div className="flex-1 px-8 md:w-[60%]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                CTF Dr.WEB 2024 
              </h2>
              <hr />
              <p className="text-sm mt-4 text-white mb-4 text-justify">
                Dr.WEB kembali mencari bakat terbaik di dunia keamanan siber lho! 🛡 <br />
                Ikuti kompetisi Capture The Flag (CTF) dari 2 - 15 Desember 2024 dan buktikan kemampuan kamu dalam reverse engineering & analisis file. 💻 <br /> <br />
                🎯 Cara Bermain: <br /> <br />
                Selesaikan 16 tantangan untuk capture the {"\"flag\""} dan kumpulkan poin terbanyak. Pemain tercepat akan mendapatkan poin tambahan! <br /><br />
                🏆 Hadiah:<br />
                🎁 Lisensi Dr.WEB Security Space (1 tahun) untuk semua peserta<br />
                🎁 Hadiah spesial untuk 20 pemain terbaik<br />
                ✍️ Pendaftaran sudah dibuka! 
                <a href="https://ctf-indonesia.dev.drweb.com" className="text-blue-400 pl-2">
                  Yuk daftar sekarang!
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 px-0 mt-[-3rem]">
          {posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 3).map((post) => {
            const maxLength = 150;
            const truncatedCaption =
              post.caption.length > maxLength
                ? post.caption.substring(0, maxLength) + "..."
                : post.caption;
            return (
              <div
                key={post.postId}
                className="flex flex-col border border-gray-200 rounded-b-none rounded-t-[30px] overflow-hidden shadow-md"
              >
                <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                  <div className="w-full aspect-square">
                    <img
                      className="object-cover w-full h-full object-left-top"
                      src={post.imageUrl}
                      alt={truncatedCaption}
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
    </div>
  );
};

export default Activity;
