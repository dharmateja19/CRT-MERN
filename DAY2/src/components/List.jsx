const List = ({ data }) => {
  return (
    <div className="cursor-pointer">
      <img
        src={"https://placehold.co/480x270?text=Thumbnail"}
        alt={data.title}
        className="w-full aspect-video rounded-xl object-cover"
      />

      <div className="flex mt-3">
        <img
          src={data.avatar || "https://placehold.co/40x40"}
          alt={data.author}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="ml-3 flex-1">
          <h3 className="font-medium text-sm text-black line-clamp-2">
            {data.title}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            {data.author}
          </p>

          <p className="text-sm text-gray-600">
            {data.views} views • {data.uploadTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;