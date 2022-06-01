import React from "react";
import { BsNewspaper, BsMenuButtonWide, BsListTask } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./sidebar.css";
import SidebarButton from "../../SidebarButton";

const Sidebar = () => {
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

  return (
    <div className="sidebar--container">
      <div className="sidebar--container__top">
          {menus.map((menu, index) => {
            return (
              <>
                <SidebarButton key={index} onClick={() => handleClick(menu.path)}>
                  <span className="sidebar--icon">{menu.icon}</span>
                  <span className="sidebar--name">{menu.name}</span>
                </SidebarButton>
              </>
            );
          })}
      </div>
      <div className="sidebar--container__bottom">
        <h3>Categories</h3>
        <SidebarButton onClick={() => handleClick("/items")}>
          <span className="sidebar--all">All</span>
        </SidebarButton>
          {categories?.map((category, index) => {
            return (
              <>
                <SidebarButton key={index} onClick={() => handleClick(`/items/${category.id}`)}>
                  <span className="sidebar--name">{category.name}</span>
                </SidebarButton>
              </>
            )
          })}
      </div>
    </div>
  );
};

export default Sidebar;
