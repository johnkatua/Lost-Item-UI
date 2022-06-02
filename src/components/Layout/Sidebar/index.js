import React, { useState, useEffect } from "react";
import { BsNewspaper, BsMenuButtonWide, BsListTask } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./sidebar.css";
import SidebarButton from "../../SidebarButton";

const Sidebar = () => {
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categoriesReducer);

  const handleClick = (path) => {
    return navigate(path);
  };

  const menus = [
    {
      name: "Home",
      path: "/",
      icon: <BsNewspaper />,
    },
    {
      name: "Tips",
      path: "/tips",
      icon: <BsListTask />,
    },
    {
      name: "My Items",
      path: "/myitems",
      icon: <BsMenuButtonWide />,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth]);

  const on = width > 768;

  return (
    <div className="sidebar--container">
      <div className={on ? "sidebar--container__top" : "sidebar--container__top__mobile"}>
          {menus.map((menu, index) => {
            return (
              <>
                <SidebarButton key={index} onClick={() => handleClick(menu.path)} mobile={on}>
                  {on ? (
                    <>
                      <span className="sidebar--icon">{menu.icon}</span>
                      <span className="sidebar--name">{menu.name}</span>
                    </>
                  ) : (
                    <span>{menu.icon}</span>
                  )}
                </SidebarButton>
              </>
            );
          })}
      </div>
      <div className={on ? "sidebar--container__bottom" : "sidebar--container__bottom__mobile"}>
        <h3>{on ? "Categories" : "Categ"}</h3>
        <SidebarButton onClick={() => handleClick("/items")} mobile={on}>
          <span className={on ? "sidebar--all": "sidebar--all__mobile"}>All</span>
        </SidebarButton>
          {categories?.map((category, index) => {
            return (
              <>
                <SidebarButton key={index} onClick={() => handleClick(`/items/${category.id}`)} mobile={on}>
                  <span className={on ? "sidebar--name" : "sidebar--name__mobile"}>
                    {((category.name.length > 5) && on) ? category.name : `${category.name.slice(0, 3)}s`}
                    </span>
                </SidebarButton>
              </>
            )
          })}
      </div>
    </div>
  );
};

export default Sidebar;
