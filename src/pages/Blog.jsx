import React from "react";
import MiniBlog from "../components/MiniBlog";

function Blog() {
  return (
    <div className="mb-20">
      <h2 className="text-[#21243D] text-3xl font-bold my-10 text-left pl-4 lg:pl-40">
        Blog
      </h2>
      <MiniBlog />
      <MiniBlog />
      <MiniBlog />
      <MiniBlog />
    </div>
  );
}

export default Blog;
