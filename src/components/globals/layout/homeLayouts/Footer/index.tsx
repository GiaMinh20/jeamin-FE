import Link from "next/link";
import router from "next/router";
import { socialList } from "~/configs";
import styles from "./index.module.css";

const handleSetMenu = (dataConfig) => {
  const socialListRender = socialList?.map((social) => {
    return {
      ...social,
      link: dataConfig[social.title],
    };
  });
  return socialListRender;
};

const blogList = [
  {
    id: 1,
    title: "Nhập hàng Trung Quốc",
    code: "",
  },
  {
    id: 2,
    title: "Đặt hàng 1688",
    code: "",
  },
  {
    id: 3,
    title: "Đặt hàng Tmall",
    code: "",
  },
  {
    id: 4,
    title: "Đặt hàng Taobao",
    code: "",
  },
];

const Footer = ({ dataConfig, dataMenu }) => {
  if (!dataConfig || !dataMenu) return null;

  return (
    <footer className="">
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.inner}>
            <div className=" col-span-1">
              <div className={styles.title}>
                <p className="uppercase font-bold text-lg !mb-4"> Menu </p>
              </div>
              <div className={styles.contentFoot}>
                {dataMenu?.map((item) => (
                  <div key={item.Name} className={styles.menuItem}>
                    <a
                      className={styles.colorD}
                      onClick={() =>
                        router.push({
                          pathname: "/chuyen-muc",
                          query: { code: item?.Code },
                        })
                      }
                    >
                      {item?.Name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <div className={styles.title}>
                <p className="uppercase font-bold text-lg !mb-4 mb-5">Blog</p>
              </div>
              {blogList.map((blog) => (
                <div className={styles.menuItem} key={blog?.id}>
                  <Link href="#">
                    <a target={"_blank"} className={styles.colorD}>
                      {blog?.title}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-span-1">
              <div className={styles.title}>
                <p className="uppercase font-bold text-lg !mb-4"> Liên hệ </p>
              </div>
              <div className={styles.contentFoot}>
                <div className={styles.contactBox}>
                  Hotline:
                  <a
                    href={`tel:${dataConfig?.Hotline}`}
                    className={`${styles.contactLink}`}
                  >
                    <span className={styles.colorD}>{dataConfig?.Hotline}</span>
                  </a>
                </div>
                <div className={styles.contactBox}>
                  Email:
                  <a
                    href={`mailto:${dataConfig?.EmailContact}`}
                    className={`${styles.contactLink}`}
                  >
                    <span className={styles.colorD}>
                      {dataConfig?.EmailContact}
                    </span>
                  </a>
                </div>
                <div className={styles.contactBox}>
                  Địa chỉ:
                  <span
                    className={styles.colorD}
                  >
                    {dataConfig?.Address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.cRight}>Jeamin Logistics</p>
      </div>
    </footer>
  );
};

export default Footer;
