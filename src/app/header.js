import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-end space-x-2 print:hidden">
      <Link href="/" className="text-black-500 underline">
        Home
      </Link>
      <Link href="/cv" className="text-black-500 underline">
        CV
      </Link>
    </div>
  );
}