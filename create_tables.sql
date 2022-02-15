CREATE DATABASE ifoodru;
USE ifoodru;
CREATE TABLE users (
  id int AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  type number NOT NULL,
  email varchar(200) UNIQUE NOT NULL,
  license_plate varchar(10),
  driver_license varchar(10),
  password varchar(256),
  restaurant_id int,
  PRIMARY KEY (id) FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
CREATE TABLE suggestions (
  id int AUTO_INCREMENT,
  user_id int NOT NULL,
  description varchar(256) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE addresses (
  id int AUTO_INCREMENT,
  user_id int NOT NULL,
  zip_code varchar(10) NOT NULL,
  public_place varchar(100) NOT NULL,
  district varchar(30) NOT NULL,
  number int NOT NULL,
  complement varchar(50) NOT NULL,
  city varchar(40) NOT NULL,
  state varchar(20) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE restaurants (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  category_restaurant_id int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (category_restaurant_id) REFERENCES category_restaurants(id)
);
CREATE TABLE category_restaurants (
  id int AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  PRIMARY KEY(id),
);
CREATE TABLE category_dishes (
  id int AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE dishes (
  id int AUTO_INCREMENT,
  restaurant_id int NOT NULL,
  category_dishes_id int NOT NULL,
  name varchar(20) NOT NULL,
  value float NOT NULL,
  ingredients varchar(100) NOT NULL,
  description varchar(100) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  FOREIGN KEY (category_dishes_id) REFERENCES category_dishes(id)
);
CREATE TABLE drinks (
  id int AUTO_INCREMENT,
  restaurant_id int NOT NULL,
  name varchar(20) NOT NULL,
  value float NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
CREATE TABLE desserts (
  id int AUTO_INCREMENT,
  restaurant_id int NOT NULL,
  name varchar(20) NOT NULL,
  value float NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
CREATE TABLE orders (
  id int AUTO_INCREMENT,
  restaurant_id int NOT NULL,
  academic_id int NOT NULL,
  motoboy_id int NOT NULL,
  status varchar(20) NOT NULL,
  delivery_forecast TIME NOT NULL,
  origin varchar(50) NOT NULL,
  destiny varchar(100) NOT NULL,

  PRIMARY KEY(id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  FOREIGN KEY (academic_id) REFERENCES users(id),
  FOREIGN KEY (motoboy_id) REFERENCES users(id)
);

CREATE TABLE orders_dishes(
    id int AUTO_INCREMENT,
    order_id int NOT NULL,
    dish_id in NOT NULL,

    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (dish_id) REFERENCES dishes(id)
)

CREATE TABLE orders_drinks(
    id int AUTO_INCREMENT,
    order_id int NOT NULL,
    drink_id in NOT NULL,

    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (drink_id) REFERENCES drinks(id)
)

CREATE TABLE orders_desserts(
    id int AUTO_INCREMENT,
    order_id int NOT NULL,
    dessert_id in NOT NULL,

    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (dessert_id) REFERENCES desserts(id)
)

CREATE TABLE coupons (
  id int AUTO_INCREMENT,
  restaurant_id int NOT NULL,
  name varchar(20) NOT NULL,
  description varchar(20) NOT NULL,
  value float NOT NULL,
  status Boolean NOT NULL,
  PRIMARY KEY(cod),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
CREATE TABLE rating (
  id int AUTO_INCREMENT,
  grade int NOT NULL,
  description varchar(200) NOT NULL,
  
  PRIMARY KEY(id)
  
);
CREATE TABLE restaurants_rating_orders (
  id int AUTO_INCREMENT,
  restaurant_id int NOT NULL,
  order_id int NOT NULL,
  rating_id int NOT NULL,
  PRIMARY KEY(codRPA),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (rating_id) REFERENCES rating(id)
);