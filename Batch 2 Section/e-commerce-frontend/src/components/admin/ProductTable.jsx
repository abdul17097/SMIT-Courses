import { Link } from "react-router-dom";

export default function ProductTable({ products }) {
  const handleDelete = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="py-3 px-4 text-left">Title</th>
          <th className="py-3 px-4 text-left">Price</th>
          <th className="py-3 px-4 text-left">Category</th>
          <th className="py-3 px-4 text-left">Stock</th>
          <th className="py-3 px-4 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p._id} className="border-b hover:bg-gray-50">
            <td className="py-3 px-4">{p.title}</td>
            <td className="py-3 px-4">${p.price}</td>
            <td className="py-3 px-4">{p.category}</td>
            <td className="py-3 px-4">{p.stock}</td>
            <td className="py-3 px-4 flex space-x-2">
              <Link
                to={`/admin/edit-product/${p._id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(p._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
