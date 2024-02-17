import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold md:text-7xl">404</h1>
      <p className="text-xl md:text-3xl">You have found a secret place</p>
      <p className="text-lg md:text-xl text-center">
        Unfortunately, this is only a 404 page. You may have mistyped the
        address or the page may have moved.
      </p>
      <Link
        href="/"
        className="text-lg md:text-xl rounded-md border-2 px-4 py-2 border-slate-900 dark:border-slate-50"
      >
        Go back home
      </Link>
    </div>
  );
}
