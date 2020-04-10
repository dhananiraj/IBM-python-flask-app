import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Menu, Icon, Layout } from "antd";
import logo from "../logo.svg";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export function Navbar() {
  return (
    <nav className="menubar" style={{ verticalAlign: "middle" }}>
      <Menu mode="horizontal" selectable={false} theme={"dark"}>
        <Menu.Item key="logo">
          <a href="#">
            <p>
              <b>[W]</b>
            </p>
          </a>
        </Menu.Item>
        <Menu.Item key="title">
          <p>
            <b>WHERE IS ___ ?</b>
          </p>
        </Menu.Item>
      </Menu>
    </nav>
  );
}
