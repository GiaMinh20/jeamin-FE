export const repoVNRouter = [
  {
    group: "Quản lý kho",
    icon: "fas fa-boxes-alt",
    controllers: [
      {
        path: "javascript:;",
        name: "Quản lý kho",
        icon: "fas fa-warehouse-alt",
        childrens: [
          {
            path: "/manager/warehouse/check-warehouse-vietnam",
            name: "Kiểm hàng kho VN",
          },
          // {
          //   path: "/manager/warehouse/out-stock",
          //   name: "Xuất kho",
          // },
          {
            path: "/manager/money/out-stock-payment",
            name: "Thanh toán xuất kho",
          },
        ],
      },
    ],
  },
  {
    group: "Danh sách đơn hàng",
    icon: "far fa-file-invoice-dollar",
    controllers: [
      {
        path: "javascript:;",
        name: "Đơn hàng",
        icon: "fas fa-cubes",
        childrens: [
          {
            key: "MainOrderAnother",
            path: "/manager/order/order-list?q=3",
            name: "Đơn mua hộ",
          },
        ],
      },
    ],
  },
  {
    group: "Xuất kho",
    controllers: [
      {
        path: "/manager/warehouse/out-stock",
        name: "Xuất kho",
        icon: "fas fa-file-export",
      },
    ],
  },
  {
    group: "Quản lý bao hàng",
    controllers: [
      {
        path: "/manager/warehouse/package-management",
        name: "Bao hàng",
        icon: "far fa-box-full",
      },
    ],
  },
  {
    group: "Quản lý mã vận đơn",
    controllers: [
      {
        path: "/manager/warehouse/transaction-code-management",
        name: "Mã vận đơn",
        icon: "fas fa-barcode-scan",
      },
    ],
  },
  {
    group: "Quản lý kiện trôi nổi",
    controllers: [
      {
        path: "/manager/warehouse/floating-package",
        name: "Kiện trôi nổi",
        icon: "fas fa-truck-loading",
      },
    ],
  },
];
