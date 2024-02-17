import { ArticleCard, ArticleCard2 } from "@/components/article-card";
import { mongodb } from "@/lib/mongodb";

async function getArticles() {
  const db = mongodb.db("game-glare");
  const articles = await db.collection("articles").find().toArray();

  return articles;
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="grid grid-cols-1 px-3 gap-4 h-fit md:grid-cols-2 md:px-12">
      {articles.map((article) => (
        <ArticleCard2
          key={article._id.toString()}
          src={article.image}
          title={article.title}
        />
      ))}
      <div className="grid grid-cols-2 gap-4">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}
