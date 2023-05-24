export const userRouter = [
  {
    group: "TỔNG QUAN",
    controllers: [
      {
        path: "/user",
        name: "Điều khiển",
        icon: "fal fa-home-alt",
      },
    ],
  },
  {
    group: "MUA HÀNG",
    controllers: [
      {
        path: "javascript:;",
        icon: "fal fa-shopping-basket",
        name: "Mua hàng hộ",
        childrens: [
          {
            path: "/user/order-list?q=3",
            name: "Đơn mua hộ",
          },
          {
            path: "/user/create-order",
            name: "Tạo mua hộ khác",
          },
        ],
      },
    ],
  },
  {
    group: "QUẢN LÝ TÀI CHÍNH",
    controllers: [
      {
        path: "javascript:;",
        icon: "far fa-sack-dollar",
        name: "Tài chính",
        childrens: [
          {
            path: "/user/history-transaction-vnd",
            name: "Lịch sử giao dịch",
          },
          {
            path: "/user/recharge-vnd",
            name: "Tạo yêu cầu nạp",
          },
          {
            path: "/user/withdrawal-vnd",
            name: "Tạo yêu cầu rút",
          },
        ],
      },
    ],
  },
  {
    group: "KIỂM TRA",
    controllers: [
      {
        path: "javascript:;",
        icon: "fas fa-edit",
        name: "Kiểm tra",
        childrens: [
          {
            path: "/user/tracking",
            name: "Tracking",
          },
          {
            path: "/user/report",
            name: "Khiếu nại",
          },
          {
            path: "/user/transaction-code-management",
            name: "Quản lý mã vận đơn",
          },
        ],
      },
    ],
  },
];
