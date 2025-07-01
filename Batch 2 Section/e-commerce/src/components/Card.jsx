export const Card = ({ data }) => {
  const { title, description, image, price } = data;
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        className="w-[50%] h-[300px] object-fit rounded-t-lg"
        src={image}
        alt="Product"
      />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">
        {description?.length > 100
          ? `${description.substring(0, 100)}...`
          : description}
      </p>
      <p className="text-gray-800 font-bold mt-2">${price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};
