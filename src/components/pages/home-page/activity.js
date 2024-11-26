import { useEffect, useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import { client } from "@/utils/sanity"; // Sanity client

export default function Activity(){
  const [posts, setPosts] = useState([]);

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

    fetchData(); // Call the async function
  }, []);

  return (
    <section className="min-h-screen pt-10 md:pt-24 px-8 pb-24 snap-start" id="activity-section">
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
              src="/images/ctf-dr-web.jpeg" // Update with your logo path
              alt="Indosec Summit 2024"
              className="w-full h-auto flex"
            />
          </div>

          {/* Right Side: Event Explanation */}
          <div className="flex-1 p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              CTF Dr.WEB 2024 
            </h2>
            <hr />
            <p className="text-md md:text-lg mt-4 text-white mb-4 text-justify">
              Dr.WEB kembali mencari bakat terbaik di dunia keamanan siber lho! 🛡 <br />
              Ikuti kompetisi Capture The Flag (CTF) dari 2 - 15 Desember 2024 dan buktikan kemampuan kamu dalam reverse engineering & analisis file. 💻 <br /> <br />
              🎯 Cara Bermain: <br /> <br />
              Selesaikan 16 tantangan untuk capture the {"\"flag\""} dan kumpulkan poin terbanyak. Pemain tercepat akan mendapatkan poin tambahan! <br /><br />

              🏆 Hadiah:<br />
              🎁 Lisensi Dr.WEB Security Space (1 tahun) untuk semua peserta<br />
              🎁 Hadiah spesial untuk 20 pemain terbaik<br />

              ✍️ Pendaftaran sudah dibuka! 
              <a href="https://indosecsummit.com/" className="text-blue-400 pl-2">
                Yuk daftar sekarang!
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-12 px-0 md:px-24">
        {posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 3).map((post) => {
          const maxLength = 150;
          const truncatedCaption =
            post.caption.length > maxLength
              ? post.caption.substring(0, maxLength) + "..."
              : post.caption;

          return (
            <div
              key={post.postId}
              className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-md"
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
  );
}