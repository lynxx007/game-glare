import { mongodb } from "@/lib/mongodb";

async function getData(genre: string) {
  const db = mongodb.db(process.env.DB_NAME);
  const data = await db.collection("articles").find({ genre }).toArray();
  return data;
}

export default async function Genre({
  params,
}: {
  params: { genre: string[] };
}) {
  const data = await getData(params.genre[0]);

  return (
    <div>
      {data.length > 0 ? (
        data.map((article) => (
          <div key={article._id.toString()}>{article.title}</div>
        ))
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
}
