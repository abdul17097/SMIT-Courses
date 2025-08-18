import { useEffect, useState } from "react";
import { api } from "@/api/axiosInstance";
import ProductTable from "@/components/admin/ProductTable";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
      <ProductTable products={products} />
    </div>
  );
}
