"use client";

import {
  InboxIcon,
  HomeIcon,
  BriefcaseIcon,
  PencilSquareIcon,
  PlusIcon,
  ListBulletIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Hospitation", href: "/dashboard/hospitation", icon: BriefcaseIcon },
  { name: "Hospitationsliste", href: "/dashboard/hospitationlist", icon: ListBulletIcon },
  { name: "Einheit anbieten", href: "/dashboard/offerlesson", icon: PlusIcon },
  { name: "Eingang", href: "/dashboard/inbox", icon: InboxIcon },
  { name: "Feedback", href: "/dashboard/feedback", icon: PencilSquareIcon },
  // { name: "Test", href: "/dashboard/test", icon: EyeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-orange-100 hover:text-orange-700 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-orange-100 text-orange-700": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}