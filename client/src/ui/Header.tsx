import { IoClose, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { useEffect, useState } from "react";
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";
import Container from "./Container";
import { bottomNavigation } from "../constants";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { CategoryProps } from "../../type";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/categories", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Data fetching Error" + response?.statusText);
        }

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-44" />
        </Link>
        {/* SearchBar */}
        <div className="hidden md:inline-flex w-full max-w-3xl relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full flex-1 rounded-full border-0 py-2 text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-darkText sm:text-sm sm:leading-6 pl-4 pr-12"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText ? (
            <IoClose
              onClick={() => setSearchText("")}
              className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
            />
          ) : (
            <IoSearchOutline className="absolute top-2.5 right-4 text-xl" />
          )}
        </div>
        {/* NavLinks */}
        <div className="flex items-center gap-x-6 text-2xl">
          <Link to={"/profile"}>
            <FiUser className="hover:text-skyText duration-200" />
          </Link>
          <Link to={"/favorite"} className="relative">
            <FiStar className="hover:text-skyText duration-200" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute w-4 h-4 rounded-full -top-1 -right-2 text-[9px] font-semibold">
              0
            </span>
          </Link>
          <Link to={"/cart"} className="relative">
            <FiShoppingBag className="hover:text-skyText duration-200" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute w-4 h-4 rounded-full -top-1 -right-2 text-[9px] font-semibold">
              0
            </span>
          </Link>
        </div>
      </div>
      <div className="bg-darkText text-whiteText">
        <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 text-sm/6 font-semibold text-gray-300 hover:text-white">
              Select Category <FaChevronDown />
            </MenuButton>
            <Transition>
              <MenuItems
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
              >
                {categories?.map((item: CategoryProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="w-full flex items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      <img
                        src={item?.image}
                        alt="image"
                        className="w-6 h-6 rounded-md"
                      />
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
          {bottomNavigation?.map(({ title, link }) => (
            <Link
              className="uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-whiteText duration-200 relative group overflow-hidden"
              key={title}
              to={link}
            >
              {title}
              <span className="w-full h-[1px] inline-flex bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Header;
