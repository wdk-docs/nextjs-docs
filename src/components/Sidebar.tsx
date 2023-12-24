"use client";

import menus from "@/nav/menus";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function SubMenu({ menu, ...props }: any) {
  return (
    <li key={menu.label}>
      {menu.subMenus && menu.subMenus.length ? (
        <details>
          <summary>{menu.label}</summary>
          <ul>
            {menu.subMenus.map((subMenu: any) => (
              <SubMenu key={subMenu.label} menu={subMenu} />
            ))}
          </ul>
        </details>
      ) : (
        <Link href={menu.href || "#"}>{menu.label}</Link>
      )}
    </li>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const routerRoot: any = pathname.split("/")[1] || "docs";

  return (
    routerRoot &&
    menus[routerRoot] && (
      <ul className="menu menu-sm lg:menu-md px-4 py-0">
        {menus[routerRoot].map((menu: any) => (
          <SubMenu key={menu.label} menu={menu} />
        ))}
      </ul>
    )
  );
}
