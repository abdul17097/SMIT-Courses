export const CategoryCard = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src="https://via.placeholder.com/300x200"
          alt="Category"
        />
        <h2 className="text-xl font-semibold mt-4">Category Title</h2>
        <p className="text-gray-600 mt-2">
          This is a short description of the category.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Products
        </button>
      </div>
    </div>
  );
};
