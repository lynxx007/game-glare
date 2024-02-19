import Image from "next/image";
import { Card } from "./ui/card";

interface ArticleCardProps {
  src: string;
  title: string;
}

export const ArticleCard = ({ src, title }: ArticleCardProps) => {
  return (
    <Card className="h-full relative">
      <Image
        src={src}
        height={200}
        width={200}
        alt={title}
        className="rounded-md object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-start p-4 rounded-3xl">
        <p className="text-white text-lg font-bold tracking-tight leading-tight">
          {title}
        </p>
      </div>
    </Card>
  );
};
