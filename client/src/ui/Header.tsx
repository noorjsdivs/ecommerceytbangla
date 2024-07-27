import { Link } from "react-router-dom";
import { logo } from "../assets";

const Header = () => {
  const navigation = [
    { title: "Cancel", link: "/cancel" },
    { title: "Cart", link: "/cart" },
    { title: "Category", link: "/category" },
    { title: "Favorite", link: "/favorite" },
    { title: "NotFound", link: "/notfound" },
    { title: "Orders", link: "/orders" },
    { title: "Product", link: "/product" },
    { title: "Profile", link: "/profile" },
    { title: "Success", link: "/success" },
  ];
  return (
    <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-44" />
      </Link>
      <div className="flex items-center gap-x-6">
        {navigation.map((item) => (
          <Link
            to={item?.link}
            className="text-base uppercase font-bold hover:text-green-600"
            key={item?.title}
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
