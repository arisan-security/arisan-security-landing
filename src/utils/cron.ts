// import cron from "node-cron";
// import fetch from "node-fetch";
// import { client } from "@/utils/sanity"; 

// const fetchDataFromRapidAPI = async () => {
//   try {
//     client
//   .delete({query: '*[_type == "instagramPost"][0...999]'})
//   .then(console.log)
//   .catch(console.error)
//     const response = await fetch("https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=arisansecurity.id", {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || 'default_key',
//         "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com"
//       }
//     });
//     const apiData:any = await response.json();

//     // Map the API data to the Sanity document format
//     const posts = apiData.data.items.filter((data: any) => data.media_name === 'post' || data.media_name === 'album'); // Adjust based on your API response structure

//     for (const post of posts) {
//         const doc = {
//         _type: "instagramPost",
//         _id: post.id,
//         postId: post.id,
//         caption: post.caption.text,
//         createdAt: new Date(post.caption.created_at * 1000).toISOString(), // Convert UNIX timestamp to ISO
//         user: {
//             userId: post.user.id,
//             fullName: post.user.full_name,
//             username: post.user.username,
//             profilePicUrl: post.user.profile_pic_url,
//         },
//         hashtags: post.caption.hashtags,
//         images: post.image_versions.items.map((img: any, idx: number) => ({
//             _key: Math.random().toString(36).slice(-6),
//             url: img.url,
//             width: img.width,
//             height: img.height,
//         })),
//         thumbnailUrl: post.thumbnail_url,
//         };

//         // Save each post to Sanity
//         await client.createOrReplace(doc);
//         console.log(`Fetched and stored post with ID: ${post.id}`);
    
//     }
//   } catch (error) {
//     console.error("Error fetching from RapidAPI:", error);
//   }
// };

// console.log("Running fetchDataFromRapidAPI now for testing...");
// fetchDataFromRapidAPI();
// // Schedule the cron job for 5 AM and 7 PM every day
// cron.schedule("0 5,19 * * *", () => {
//   console.log("Fetching data from RapidAPI...");
//   fetchDataFromRapidAPI();
// });