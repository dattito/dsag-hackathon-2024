// src/components/Product.tsx
import React from "react";

interface ArticleHeaderProps {
  title: string;
  imageUrl: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, imageUrl }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="row">
        <img src={imageUrl} alt={title} style={{ maxWidth: "100%" }} />
        <h3>Wasserflasche</h3>
      </div>
    </div>
  );
};

export default ArticleHeader;
