"use client";

import { useAddProductsMutation, useGetProductsQuery } from "@/lib/features/product/productApi";
import { useAppSelector } from "@/lib/hook";
import type { RootState } from "@/lib/store";
import { useState } from "react";

// Single product card component
function ProductCard({ product }: { product: any }) {
  return (
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-lg transition flex flex-col h-full">
      <img
        src={product.images?.[0] ?? "https://via.placeholder.com/300"}
        alt={product.title || "Product image"}
        className="h-48 w-full object-cover rounded-t-xl"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg line-clamp-2">{product.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1 flex-1">{product.description}</p>
        <p className="mt-3 text-xl font-bold text-blue-600">${product.price}</p>
      </div>
    </div>
  );
}

// Main dashboard component
export default function Card() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [createProduct, { isLoading: isAdding }] = useAddProductsMutation();
  const [message, setMessage] = useState("");

  const handleAddProduct = async () => {
    try {
      await createProduct({
        title: "Nh jg tv SR",
        price: 29.99,
        description: "Nh jg tv SR - Nh jg tv SR - Nh jg tv SR - Nh jg tv SR",
        categoryId: "2",
        images: ["https://rootsabroadtravel.com/wp-content/uploads/2024/03/Wonderful-Things-to-Do-in-Siem-Reap-Cambodia-Beyond-Angkor-Wat-1170x600.jpg"],
      }).unwrap();

      setMessage("Product added successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Failed to add product.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <section className="max-h-screen w-full bg-slate-50 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Product Dashboard</h1>
        <button
          onClick={handleAddProduct}
          disabled={isAdding}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          aria-label="Add new product"
        >
          {isAdding ? "Adding..." : "Add Product"}
        </button>
      </div>

      {/* Counter */}
      <div className="mb-8 rounded-xl border bg-white p-4 shadow-sm w-60">
        <p className="text-sm text-gray-500">Global Counter</p>
        <p className="text-3xl font-bold">{count}</p>
      </div>

      {/* Status message */}
      {message && (
        <div className="mb-4 p-2 rounded bg-green-100 text-green-800">{message}</div>
      )}

      {/* Loading & Error */}
      {isLoading && <p>Loading products...</p>}
      {isError && <p className="text-red-500">Failed to load products.</p>}

      {/* Product Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-fr">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}