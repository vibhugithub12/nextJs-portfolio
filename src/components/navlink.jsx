"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink=({link})=> {
    const pathName = usePathname()
    return (
        <div>
            <Link className={`rounded p-1 ${pathName===link.url && "bg-black text-white"}`} href={link.url}>{link.title}</Link>
        </div>
    );
}

export default NavLink;