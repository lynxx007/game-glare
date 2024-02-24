import { mongodb } from "@/lib/mongodb";
import Image from "next/image";

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
  const showCharacters = 250;
  return (
    <div className="flex flex-col space-y-4">
      {data.length > 0 ? (
        data.map((article) => (
          <div
            key={article._id.toString()}
            className="h-40 w-full border-2 rounded-md shadow-md flex"
          >
            <Image
              src={article.image}
              width={200}
              height={200}
              className="rounded-md object-cover h-full"
              alt={article.title}
            />
            <div className="p-4 flex-1">
              <h1 className="text-xl font-bold">{article.title}</h1>
              <p className="text-sm p-2">
                {article.text.slice(0, showCharacters)}...
              </p>
            </div>
          </div>
        ))
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
}
