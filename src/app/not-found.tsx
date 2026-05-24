import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-sm text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        Go back home
      </Link>
    </div>
  );
}