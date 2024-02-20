import { mongodb } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
export default async function Page({ params }: { params: { id: string } }) {
  try {
    const db = mongodb.db(process.env.DB_NAME);
    const data = await db
      .collection("articles")
      .findOne({ _id: new ObjectId(params.id) });

    let md;
    if (!data?.text) {
      const readMd = await fs.promises.readFile(
        `./contents/${params.id}.md`,
        "utf8"
      );
      await db
        .collection("articles")
        .updateOne(
          { _id: new ObjectId(params.id) },
          { $set: { text: readMd } }
        );
      md = readMd;
    }

    return (
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-2xl font-bold md:text-4xl">{data?.title}</h1>
        <div className="w-48 md:w-96">
          <Image
            src={data?.image}
            alt={data?.title}
            width={200}
            height={200}
            className="rounded-md border-2 border-slate-900 dark:border-slate-50 w-full"
          />
        </div>
        {data?.text ? (
          <MDXRemote source={data?.text} />
        ) : (
          <MDXRemote source={md ? md : ""} />
        )}
      </div>
    );
  } catch (error) {
    return <div>Something went wrong</div>;
  }
}
