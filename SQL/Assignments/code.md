customers [icon: users, color: blue] {
  cust_id serial pk
  name varchar(50)
  email varchar(50) 
  address varchar(100)
  phone_no char(15)
  avatar_url text

  emailverificationtoken text


  
}

products [icon: gcp-producer-portal, color:pink]{
  product_id serial pk
  proudct_name varchar(50)
  product_category varchar(50)
  product_price char(5)
  quantity   varchar(3)
  size       int null
  color      varchar(25) null
  conditions  text null 

}

orders [icon: crate, color:yellow]{
  order_id serial pk
  cust_id  int fk
  order_items string
  order_status string(12)
  payment_id  int fk
  shipping_id int fk
  payment_done boolean


  ordered_at  timestamp
  updated_at  timestamp
}

shipping [icon:truck, color:orange]{
  shipping_id int pk
  order_id int fk
  shipping_address string not null 
  estimate_time date
  shipping_mode string

}

payment [icon:money, color:green]{
  payment_id int pk
  order_id int fk
  payment_type string 
  payment_status string

  created_at  timestamp
}

customers.cust_id < orders.order_id
orders.order_id  < products.product_id

orders.order_id - payment.payment_id

orders.order_id  - shipping.shipping_id


