import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { pageType } from "~/api";
import configHomeData from "~/api/config-home";
import {
  HomeBreadcrumb,
  HomeCard,
  HomeLayout,
  HomeSidebar,
} from "~/components";
import ContentItem from "~/components/globals/layout/homeLayouts/Card/ContentItem";
import MetaTags from "~/components/globals/metaTag";
import { SEOConfigs } from "~/configs/SEOConfigs";
import { TNextPageWithLayout } from "~/types/layout";
import { _format } from "~/utils";

import styles from "./index.module.css";
import Head from "next/head";

const Index: TNextPageWithLayout = () => {
  const router = useRouter();
  const [Data, setData] = useState<any>(null);

  useEffect(() => {
    const apiCall = async () => {
      return await pageType.getByCode(router?.query?.code.toString().trim());
    };
    if (router?.query?.code) {
      apiCall()
        .then((data) => {
          setData(data?.Data);
        })
        .catch((error) => {
          console.error(error);
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
        <title>{Data?.Title && (Data?.Title !== " ") ? Data?.Title : Data?.Name}</title>
      </Head>
      <MetaTags data={Data} dataConfig={dataConfig} />
      <div className={styles.chuyenMuc}>
        <div className="container">
          <div className={styles.inner}>
            {!(Data?.Pages.length > 0) && (
              <HomeBreadcrumb currentRoute={Data} name={Data?.Name} />
            )}
            <div className={styles.chuyenMucContent}>
              <div className={styles.left}>
                {!!(Data?.Title && Data?.Description) ? (
                  <>
                    <div className={styles.title}>
                      <h1>{Data?.Title}</h1>
                      <span className={styles.created}>
                        <span className={styles.time}>
                          {_format.getShortVNDate(Data?.Created)}
                        </span>
                        <span className={styles.by}>{Data?.CreatedBy}</span>
                      </span>
                    </div>
                    <ContentItem
                      data={Data}
                      code={router?.query?.Code}
                      Title={""}
                      IMG={""}
                      Description={""}
                      Created={undefined}
                      PageContent={undefined}
                    />
                  </>
                ) : (
                  Data?.Pages.length > 0 && (
                    <HomeCard
                      direction={"vertical"}
                      data={Data?.Pages}
                      code={router?.query?.Code}
                      name={Data?.Name}
                    />
                  )
                )}
              </div>
              <div className={styles.right}>
                <div className="sticky top-[120px]">
                  <HomeSidebar />
                </div>
              </div>
            </div>
            {Data?.Pages.length > 0 && !!(Data?.Title && Data?.Description) && (
              <div>
                <div className={styles.top}>
                  <h4 className="small_title">{Data?.Name}</h4>
                  <h1>
                    Các bài viết chuyên mục{" "}
                    <span className="!text-main">{Data?.Name}</span>
                  </h1>
                </div>
                <HomeCard
                  data={Data?.Pages}
                  direction="horizontal"
                  code={router?.query?.Code}
                  name={Data?.Name}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Index.displayName = SEOConfigs.homePage;
Index.Layout = HomeLayout;

export default Index;
