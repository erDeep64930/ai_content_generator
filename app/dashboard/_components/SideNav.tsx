import { FileClock, Home, Settings2, Wallet } from "lucide-react";
import Image from "next/image";
import React from "react";

const SideNav = () => {
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: Wallet,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings2,
      path: "/dashboard/setting",
    },
  ];
  return (
    <div className="h-screen p-5 shadow-md border">
      <div className="flex justify-center">
        <Image src="/logo.png" width={100} height={100} alt="logo" />
      </div>
      {/* menulist */}
      <hr className="my-6"/>
      <div className="mt-3">
        {menuList.map((menu, index) => {
          return (
            <div key={index} className="flex mb-2 gap-3 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer">
              <menu.icon />
              <h2>{menu.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
