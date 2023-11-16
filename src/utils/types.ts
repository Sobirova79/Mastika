export interface BasePaginatedRes {
  total: number;
  page: number;
  size: number;
  pages: number;
}

export interface OrdersType {
  id: number;
  order_user: string;
  is_bot: string;
  order_vs_user: {
    username: string;
    status: 0;
    created_at: string;
    full_name: string;
    is_client: 0;
    id: 0;
    role_id: 0;
    phone_number: string;
    user_role: {
      id: 0;
      name: string;
      role_permission: [
        {
          id: 0;
          pagecrud_id: 0;
          permission_crud: {
            id: 0;
            name: string;
          };
        }
      ];
    };
  };
  phone_number: string;
  extra_number: string;
  payment_type: 0;
  firstly_payment: 0;
  is_delivery: 0;
  comment: string;
  reject_reason: string;
  created_at: string;
  updated_at: string;
  deliver_date: string;
  status: 0;
  address: string;
  apartment: string;
  home: string;
  near_to: string;
  order_vs_category: {
    name: string;
    id: 0;
    status: 0;
  };
  lat: string;
  long: string;
  order_br: {
    id: string;
    name: string;
    branch_id: string;
    origin: 0;
    status: 0;
    branch_dr: {
      id: string;
      name: string;
      latitude: 0;
      langtitude: 0;
      country: string;
      status: 0;
      is_fabrica: 0;
    };
  };
  product_order: [
    {
      id: 0;
      order_vs_product: {
        id: string;
        status: 0;
        name: string;
        productType: string;
        group_id: string;
        price: 0;
      };
      product_id: string;
      comment: string;
      amount: 0;
    }
  ];
}
export interface orderTypes extends BasePaginatedRes {
  items: OrdersType[];
  pages: number;
}
// export interface orderType extends BasePaginatedRes {
//   order: orderType[];
// }
export interface OrderValueType {
  id: number;
  content: string;
  order_id: number;
  subcat_id: number;
  value_vs_subcat: {
    id: number;
    name: string;
    category_id: number;
    contenttype_id: number;
    subcategory_vs_category: {
      name: string;
      id: number;
      status: number;
    };
    subcategory_vs_contenttype: {
      id: number;
      name: string;
      status: number;
    };
  };
  select_id: number;
  value_vs_select: {
    id: number;
    content: string;
    value: string;
    selval_vs_subcat: {
      id: number;
      name: string;
      category_id: number;
      contenttype_id: number;
      subcategory_vs_category: {
        name: string;
        id: number;
        status: number;
      };
      subcategory_vs_contenttype: {
        id: number;
        name: string;
        status: number;
      };
    };
  };
  selchild_id: number;
  value_vs_selchild: {
    id: number;
    content: string;
    value: string;
    status: number;
  };
}
export interface orderType {
  order: [
    {
      id: number;
      order_user: string;
      order_vs_user: {
        username: string;
        status: number;
        created_at: string;
        full_name: string;
        is_client: number;
        id: number;
        role_id: number;
        phone_number: string;
      };
      phone_number: string;
      extra_number: string;
      payment_type: number;
      firstly_payment: number;
      is_delivery: number;
      comment: string;
      reject_reason: string;
      created_at: string;
      updated_at: string;
      deliver_date: string;
      status: number;
      address: string;
      apartment: string;
      home: string;
      near_to: string;
      images: string[];
      packaging: number;
      complexity: number;
      portion: number;
      is_bot?: 1 | 0;
      color: { [key: number | string]: string };
      color_details: string;
      order_fill: {
        id: number;
        filling_id: number;
        floor: number;
        filler: {
          id: number;
          name: string;
          category_id: number;
          ptype: number;
        };
      }[];
      order_vs_category: {
        name: string;
        id: number;
        status: number;
      };
      lat: string;
      long: string;
      order_br: {
        id: string;
        name: string;
        branch_id: string;
        origin: number;
        status: number;
        branch_dr: {
          id: string;
          name: string;
          latitude: number;
          langtitude: number;
          country: string;
          status: number;
          is_fabrica: number;
        };
      };
      product_order: [
        {
          id: number;
          order_vs_product: {
            id: string;
            status: number;
            name: string;
            productType: string;
            group_id: string;
            price: number;
          };
          product_id: string;
          comment: string;
          amount: number;
        }
      ];
    }
  ];
  value: OrderValueType[];
}
export interface DepartmentsTypes {
  items: [
    {
      id: string;
      name: string;
      latitude: 0;
      longtitude: 0;
      country: string;
      status: 0;
      is_fabrica: 0;
      department_br: [
        {
          id: string;
          name: string;
          origin: 0;
          status: 0;
        }
      ];
    }
  ];
  total: number;
  page: number;
  size: number;
  pages: number;
}
export interface userTypes {
  username: string;
  password: string;
  phone_number: string;
  role_id: number;
  full_name: string;
  status: number;
}
export interface usersType {
  items: [
    {
      username: string;
      status: number;
      created_at: string;
      full_name: string;
      is_client: number;
      id: number;
      role_id: number;
      phone_number: string;
      user_role: {
        id: number;
        name: string;
      };
    }
  ];
  total: number;
  page: number;
  size: number;
  pages: number;
}

export interface CategoryTypes {
  id: number;
  name: string;
  status: boolean;
  detail: [
    {
      loc: [string, 0];
      msg: string;
      type: string;
    }
  ];
}
export interface FillingTypes {
  id: 0;
  name: string;
  category_id: 0;
  ptype: 0;
}
export interface ProductTypes {
  id: string;
  status: number;
  name: string;
  productType: string;
  group_id: string;
  price: number;
  pages: number;
}
export enum fillingType {
  standart = 0,
  premium = 1,
  pp = 2,
}
export enum PaymentTypes {
  cash = 0,
  payme = 1,
  click = 2,
}
export enum SystemTypes {
  mastika = 0,
  tg = 1,
  web = 2,
}

export enum OrderStatus {
  new = 0,
  accepted = 1,
  rejected = 2,
}
export enum FirstlyPayment {
  yes = 1,
  no = 0,
}
export interface TypesRole {
  id: number;
  name: string;
  detail: [
    {
      loc: [string, 0];
      msg: string;
      type: string;
    }
  ];
}
export interface SubCategoryTypes {
  id: number;
  name: string;
  category_id: 0;
  contenttype_id: 0;
  subcategory_vs_category: {
    name: "string";
    id: 0;
    status: 0;
  };
  subcategory_vs_contenttype: {
    id: 0;
    name: "string";
    status: 0;
  };
}
export interface MeTypes {
  username: string;
  status: number;
  created_at: string;
  id: number;
}
export interface Order {
  product: string;
  description: string;
  id: number | string;
  rating: number;
  created_at: Date;
  started_at: Date;
  status: number;
  urgent: boolean;
  user: any;
  user_manager: string;
  is_bot: boolean;
  brigada: {
    id: number | string;
    name: string;
    description?: string;
    status?: number;
    order?: string;
  };
  file: {
    url: string;
    status: number;
  }[];
  category: any;
  expanditure: {
    id: number;
    amount: number;
    comment: string;
    user: any;
    created_at: Date;
    tool: {
      code: string;
      id: number;
      mainunit: string;
      name: string;
      producttype: string;
    };
  }[];
  fillial: {
    id: number | string;
    name: string;
    longtitude: number;
    origin: number;
    latitude: number;
    parentfillial: { name: string };
    country: string;
    status: number;
  };
  finished_at: Date;
}

export interface OrderType extends BasePaginatedRes {
  items: Order[];
}
