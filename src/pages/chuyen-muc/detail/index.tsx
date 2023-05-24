import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Page } from "~/api";
import configHomeData from "~/api/config-home";
import { HomeLayout, HomeSidebar, showToast } from "~/components";
import ContentItem from "~/components/globals/layout/homeLayouts/Card/ContentItem";
import MetaTags from "~/components/globals/metaTag";
import { SEOConfigs } from "~/configs/SEOConfigs";
import { TNextPageWithLayout } from "~/types/layout";
import styles from "./index.module.css";
import Head from "next/head";

const Index: TNextPageWithLayout = () => {
  const router = useRouter();
  const [Data, setData] = useState({
    Title: "",
    SideBar: null,
  });

  useEffect(() => {
    const apiCall = async () => {
      return await Page.getByCode(`${router?.query?.code.toString().trim()}`);
    };

    if (router?.query?.code) {
      apiCall()
        .then((res) => setData(res?.Data))
        .catch((error) => {
          showToast({
            title: "Bài viết không tồn tại!",
            message: error?.response?.data?.message,
            type: "error",
          });
        });
    }
  }, [router]);

  const { data: dataConfig } = useQuery({
    queryKey: ["homeConfig"],
    queryFn: () => configHomeData.get().then((res) => res?.Data),
  });  

  return (
    <>
      <Head>
        <title>{Data?.Title}</title>
      </Head>
      <MetaTags data={Data} dataConfig={dataConfig} />
      <div className={styles.chuyenMucDetail}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.chuyenMucDetailContent}>
              <div
                className={`${Data?.SideBar ? "col-span-9" : "col-span-12" }`}
                // style={{
                //   gridColumn: Data?.SideBar ? "1/13 lg:1/10" : "1/13 lg:1/13",
                // }}
              >
                <ContentItem
                  data={Data}
                  code={`${router?.query?.code}`}
                  Title={""}
                  IMG={""}
                  Description={""}
                  Created={undefined}
                  PageContent={undefined}
                />
              </div>
              {Data?.SideBar && (
                <div className={`${styles.right}`}>
                  <div className="order-2 col-span-12 sticky top-[120px]">
                    <HomeSidebar />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Index.displayName = SEOConfigs.homePage;
Index.Layout = HomeLayout;

export default Index;
