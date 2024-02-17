import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

export const ArticleCard = () => {
  return (
    <Card className="rounded-3xl max-w-[300px] w-full relative">
      <Image
        src={"https://i.imgur.com/Cij5vdL.png"}
        width={545}
        height={300}
        alt="Game"
        className="rounded-3xl object-cover w-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start p-2 rounded-3xl md:p-4">
        <p className="text-white text-xs font-bold tracking-tight leading-tight md:text-lg">
          Game Glare
        </p>
      </div>
    </Card>
  );
};

interface ArticleCard2Props {
  src: string;
  title: string;
}

export const ArticleCard2 = ({ src, title }: ArticleCard2Props) => {
  return (
    <Card className="rounded-3xl relative">
      <Image
        src={src}
        height={200}
        width={545}
        alt={title}
        className="rounded-3xl object-cover h-full w-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start p-4 rounded-3xl">
        <p className="text-white text-lg font-bold tracking-tight leading-tight">
          {title}
        </p>
      </div>
    </Card>
  );
};
