import Link from "next/link";
import React from "react";
import { _format } from "~/utils";
// const box = "flex items-center justify-between sm:flex-wrap lg:flex-nowrap";
const box = "grid grid-cols-4 gap-4";

const BoxItem = ({ value, path, label, icon, color }) => {
  const boxItem =
    "mb-4 lg:mb-2 xl:mb-0 md:p-[10px] rounded-[8px] xl:p-4 w-[25%] lg:w-[24%] bg-[#fff] lg:my-0 shadow-xl hover:shadow-none transition-all !w-full hover:translate-y-[5px]";
  // const boxItem =
  //   "span-col-1 shadow-xl hover:shadow-none transition-all  bg-[#fff] xl:p-4";
  const titleContain = "";
  const iconTitle = `p-[8px] rounded-[6px] w-fit h-fit text-[#fff]`;
  const styleIcon = `text-xl ${icon}`;
  const addOrder = `mr-2 text-[28px] flex items-end`;

  

  return (
    <Link href={`${path}`}>
      <a
        className={boxItem}
        style={{
          backgroundImage: `linear-gradient(225deg, #ffffff 0%, ${color}60 50%, #ffffff 100%)`,
        }}
      >
        <div className={titleContain}>
          <div className="flex justify-between mb-3 items-center">
            {value === null ? (
              <i className="fas fa-ellipsis-h"></i>
            ) : (
              <div className={addOrder} style={{ color }}>
                {value ? "+" : ""}
                {_format.getVND(value, " ")}
                <span className="text-[12px] text-sec ml-2 pb-[10px] hidden xl:block">
                  Đơn hàng
                </span>
              </div>
            )}
            <div
              className={iconTitle}
              style={{
                backgroundColor: color,
                boxShadow: `0 10px 15px -3px ${color}, 0 4px 6px -4px ${color}`,
              }}
            >
              <i className={styleIcon}></i>
            </div>
          </div>
          <p className={`font-bold uppercase text-[12px] text-sec`}>
            {label}
          </p>
        </div>
        {/* <div className="absolute top-[10px] right-[10px]">
					<i className="fad fa-ellipsis-v text-[20px]" style={{color}}></i>
				</div> */}
      </a>
    </Link>
  );
};

export const UserStatistic = ({ total }) => {
  return (
    <div className={box}>
      {total?.map((item) => (
        <React.Fragment key={item.key}>
          <BoxItem
            value={item.value}
            path={item.path}
            label={item.label}
            icon={item.icon}
            color={item.color}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
