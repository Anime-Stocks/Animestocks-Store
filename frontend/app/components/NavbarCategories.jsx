import Link from "next/link";

export default function NavbarCategories() {
    return (
        <div className="flex gap-10 font-bold text-3xl">
            <Link href={"/addWhat/admin_Manga"}>Manga</Link>
            <Link href={"/addWhat/admin_Merch"}>Merch</Link>
            <Link href={"/addWhat/admin_Novel"}>Novel</Link>
        </div>
    );
}
