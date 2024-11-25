import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // Configuração do Firebase
import { doc, getDoc } from "firebase/firestore";
import "./Article.css";

const Article = ({ articleId }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, "Articles", articleId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <div className="content">
        {article.blocks.map((block, index) => {
          if (block.type === "text") {
            return <p key={index}>{block.content}</p>;
          } else if (block.type === "image") {
            return (
              <img
                key={index}
                src={block.url}
                alt={block.alt || "Image"}
                className="article-image"
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Article;
