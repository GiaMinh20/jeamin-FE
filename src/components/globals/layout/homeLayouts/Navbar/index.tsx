import { Button, Drawer, Dropdown, Grid, Menu, Image } from "antd";
import "antd/dist/antd.css";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { _format } from "~/utils";
import styles from "./index.module.css";

// const activeMenuStyle =
//   'font-bold after:content-[""] after:absolute after:top-[96%] after:left-[0px] after:w-[100%] after:h-[4px] after:bg-[#383838]';

const { useBreakpoint } = Grid;

const handleSetMenu = (dataMenu) => {
  if (!dataMenu) return;
  const newDataMenu = dataMenu.map((menu) => {
    if (menu?.Children < 0) return menu;
    const newChildren = [];

    for (let i in menu?.Children) {
      if (menu.Children[i].Active) {
        newChildren.push(menu.Children[i]);
      }
    }

    return {
      ...menu,
      Children: newChildren,
    };
  });

  return newDataMenu;
};

const Navbar = ({ dataConfig, dataMenu }) => {
  const { sm, md, lg } = useBreakpoint();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(
    `${router?.query?.code}`.split("/")[0] || ""
  );
  const [visible, setVisible] = useState(false);
  const [newMenu, setNewMenu] = useState(handleSetMenu(dataMenu));

  useEffect(() => {
    if (!dataMenu) return;
    setNewMenu(handleSetMenu(dataMenu));
  }, [dataMenu]);

  useEffect(() => {
    setActiveMenu(`${router?.query?.code}`.split("/")[0]);
  }, [router?.query?.code]);

  return (
    <React.Fragment>
      <div className={styles.mobileHidden}>
        <ul className={styles.MenuList}>
          <li
            key={"trang-chu"}
            className={`${
              `${router?.query?.code}`.split("/")[0] === "undefined" &&
              styles.activeMenuStyle
            }`}
            onClick={() => {
              setActiveMenu("");
              router.push("/");
            }}
          >
            <a>Trang chủ</a>
            {
              <span
                className={`${styles.activeLine} ${
                  `${router?.query?.code}`.split("/")[0] === "undefined"
                    ? "block"
                    : "hidden"
                }`}
              ></span>
            }
          </li>
          {newMenu?.map((item) => {
            return item?.Children.length <= 0 ? (
              <React.Fragment key={item?.Id}>
                <li
                  key={item?.Name}
                  className={`${
                    activeMenu === item?.Code && styles.activeMenuStyle
                  }`}
                  onClick={() => {
                    setActiveMenu(item?.Name);
                    router.push({
                      pathname: "/chuyen-muc",
                      query: { code: item?.Link },
                    });
                  }}
                >
                  <a>{item?.Name}</a>
                  {
                    <span
                      className={`${styles.activeLine} ${`${
                        activeMenu === item?.Code ? "block" : "hidden"
                      }`}`}
                    ></span>
                  }
                </li>
              </React.Fragment>
            ) : (
              <Dropdown
                overlay={
                  <Menu>
                    {item?.Children.map((child) => (
                      <Menu.Item key={child?.Id}>
                        <a
                          onClick={() =>
                            router.push({
                              pathname: "/chuyen-muc/detail",
                              query: { code: child?.Link },
                            })
                          }
                        >
                          {child?.Name}
                        </a>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                key={item?.Id}
              >
                <li
                  key={item?.Name}
                  className={`${
                    activeMenu === item?.Code && styles.activeMenuStyle
                  }`}
                  onClick={() => {
                    setActiveMenu(item?.Name);
                    router.push({
                      pathname: "/chuyen-muc",
                      query: { code: item?.Code },
                    });
                    // router.push(`/chuyen-muc/${item?.Code}`);
                  }}
                >
                  <a>{item?.Name}</a>
                </li>
              </Dropdown>
            );
          })}
        </ul>
      </div>
      <div className={`${styles.mobileVisible} ${styles.mobile}`}>
        <Button className={styles.bgColor} onClick={() => setVisible(true)}>
          <i className="fas fa-bars"></i>
        </Button>
        {/* `${dataConfig?.CompanyLongName}` */}
        <Drawer
          title={
            <Image
              src={`${dataConfig?.LogoIMG}`}
              preview={false}
              width={"60%"}
            />
          }
          placement="left"
          width={300}
          onClose={() => setVisible(false)}
          visible={visible}
          closable={false}
          style={{ zIndex: "10000000" }}
        >
          <Menu className={styles.MenuList} mode={lg ? "horizontal" : "inline"}>
            <Menu.Item
              key={"Trang chủ"}
              eventKey={"Trang chủ"}
              className={`${
                activeMenu === "undefined" && styles.activeMenuStyle
              }`}
              onClick={() => {
                setActiveMenu("Trang chủ");
                router.push("/");
              }}
            >
              <a>Trang chủ</a>
            </Menu.Item>
            {newMenu?.map((item) => (
              <Menu.Item
                eventKey={item?.Name}
                key={item?.Name}
                className={`${
                  activeMenu === item?.Name && styles.activeMenuStyle
                }`}
                onClick={() => {
                  setActiveMenu(item?.Name);
                  router.push({
                    pathname: "/chuyen-muc",
                    query: { code: item?.Code },
                  });
                }}
              >
                <a>{item?.Name}</a>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
