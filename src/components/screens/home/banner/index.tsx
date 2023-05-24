import Link from "next/link";
import styles from "./index.module.css";


export const HomeBanner = ({ data }) => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: data?.BannerIMG
          ? `url(${data?.BannerIMG})`
          : "/default/banner_bg.png",
      }}
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.containerHome}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1 className="text-[#fff] md:!text-[40px] font-bold sm:!text-[30px]">
                {data?.BannerText ?? (
                  <>
                    Hệ thống nhập hàng Trung Quốc uy tín
                  </>
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
