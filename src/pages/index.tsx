import Head from "next/head";
import { useQuery } from "react-query";
import { customerBenefits, service, step } from "~/api";
import configHomeData from "~/api/config-home";
import {
  HomeBanner,
  HomeBenefit,
  HomeInfoContact,
  HomeLayout,
  HomeRegister,
  HomeServices,
  HomeTracking,
  News
} from "~/components";
import MetaTags from "~/components/globals/metaTag";
import { Customer } from "~/components/screens/home/customer";
import { PopupNoti } from "~/components/screens/home/popupNoti";
import { SEOConfigs } from "~/configs/SEOConfigs";
import { TNextPageWithLayout } from "~/types/layout";

const Index: TNextPageWithLayout = () => {
  const { data: dataConfig } = useQuery({
    queryKey: ["homeConfig"],
    queryFn: () => configHomeData.get().then((res) => res?.Data),
  });

  const { data: dataService } = useQuery({
    queryKey: ["dataService"],
    queryFn: () =>
      service
        .getList({
          PageIndex: 1,
          PageSize: 20,
          OrderBy: "Id desc",
          Active: true,
        })
        .then((res) => res?.Data?.Items),
  });

  const { data: dataRegisterSteps } = useQuery({
    queryKey: ["dataRegisterSteps"],
    queryFn: () =>
      step
        .getList({
          PageIndex: 1,
          PageSize: 20,
          OrderBy: "Id desc",
          Active: true,
        })
        .then((res) => res?.Data?.Items),
  });

  const { data: dataBenefits } = useQuery({
    queryKey: ["dataBenefits"],
    queryFn: () =>
      customerBenefits
        .getList({
          PageIndex: 1,
          PageSize: 20,
          OrderBy: "Id",
          Active: true,
        })
        .then((res) => res?.Data?.Items),
  });  
  
  return (
    <>
    <Head>
      <title>{dataConfig?.WebsiteName}</title>
    </Head>
      <MetaTags dataConfig={dataConfig} />
      <div className="homeindex mt-[-90px]">
        <div className="col-span-2">
          <HomeBanner data={dataConfig} />
          <HomeTracking />
          <HomeBenefit
            data={dataBenefits?.filter((item) => item.ItemType === 2)}
          />
          <HomeRegister data={dataRegisterSteps} />
          <News />
          <HomeInfoContact data={dataConfig} />
          <PopupNoti />
        </div>
      </div>
    </>
  );
};

// Index.displayName = SEOConfigs.homePage;
Index.Layout = HomeLayout;

export default Index;
