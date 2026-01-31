"use client";

import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="w-full fixed z-10 shadow-sm bg-white">
      <div
        className="
            p-4
            border-b
            border-gray-300
        "
      >
        <Container>
          <div
            className="
                flex 
                flex-row
                justify-between
                items-center
                gap-3
                md:gap-0   
            "
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories/>
    </div>
  );
};
export default Navbar;
