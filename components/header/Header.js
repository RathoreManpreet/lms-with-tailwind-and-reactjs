import Link from "next/link";
export default function Header() {
  return (
    <div className="bg-gray-600">
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
