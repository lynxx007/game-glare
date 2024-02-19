import { ArticleCard } from "@/components/article-card";
import { mongodb } from "@/lib/mongodb";
import Link from "next/link";

async function getData() {
  const db = mongodb.db(process.env.DB_NAME);
  const data = await db
    .collection("articles")
    .find()
    .limit(5)
    .sort({ _id: -1 })
    .toArray();
  return data;
}
export default async function Home() {
  const data = await getData();
  const firstItem = data[0];
  const secondItem = data[1];
  const thirdItem = data[2];
  const fourthItem = data[3];
  const fifthItem = data[4];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:h-98">
      <div className="grid grid-rows-1 gap-4 md:grid-rows-2">
        <Link href={`/article/${secondItem._id}`}>
          <div className="rounded-md border-2 h-48">
            <ArticleCard src={secondItem.image} title={secondItem.title} />
          </div>
        </Link>
        <div className="rounded-md border-2 h-48">
          <ArticleCard src={fifthItem.image} title={fifthItem.title} />
        </div>
      </div>
      <Link href={`/article/${firstItem._id}`}>
        <div className="rounded-md border-2 h-48 md:h-full">
          <ArticleCard src={firstItem.image} title={firstItem.title} />
        </div>
      </Link>
      <div className="grid grid-rows-1 gap-4 md:grid-rows-2">
        <Link href={`/article/${thirdItem._id}`}>
          <div className="rounded-md border-2 h-48">
            <ArticleCard src={thirdItem.image} title={thirdItem.title} />
          </div>
        </Link>
        <Link href={`/article/${fourthItem._id}`}>
          <div className="rounded-md border-2 h-48">
            <ArticleCard src={fourthItem.image} title={fourthItem.title} />
          </div>
        </Link>
      </div>
    </div>
  );
}
