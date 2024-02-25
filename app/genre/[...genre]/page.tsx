import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { mongodb } from "@/lib/mongodb";
import Image from "next/image";
import Link from "next/link";

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
          <Link key={article._id.toString()} href={`/article/${article._id}`}>
            <div className="h-40 w-full border-2 rounded-md shadow-md flex">
              <Image
                src={article.image}
                width={200}
                height={200}
                className="rounded-md object-cover h-full"
                alt={article.title}
              />
              <div className="p-4 flex-1">
                <h1 className="text-sm font-bold md:text-xl">
                  {article.title}
                </h1>
                <p className="text-sm p-2 invisible md:visible">
                  {article.text.slice(0, showCharacters)}...
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="h-40 w-full flex justify-center items-center">
          <h1 className="text-2xl text-center">
            No article found for {params.genre[0]}
          </h1>
        </div>
      )}
    </div>
  );
}
