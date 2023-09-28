const Post = ({title, cover, author}) => {
  return (
    <div className="shadow-sm hover:shadow-lg rounded-lg block bg-white">
      <img alt={title} src={cover} className="object-contain w-full h-60 mx-auto" />
      <div className="p-3 pb-4">
        <p className="text-gray-700 font-semibold">{author}</p>
        <h3 className="text-2xl text-blue-500 font-bold">{title}</h3>
      </div>
    </div>
  )
}


export default Post;