import React from "react";
import HomePage from "./pages/users/homePage";

import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/routers";
import MasterLayout from "./pages/users/theme/masterLayout";
import Story from "./pages/users/story/story";
import Post from "./pages/users/post/post";
import Product from "./pages/users/product/product";
import ProductItem from "./pages/users/product/productItem";
import HomeShop from "./pages/users/shop/home/home";
import ProductShop from "./pages/users/shop/home/productShop";
import Store from "./pages/users/store/store";
import Contact from "./pages/users/contact/contact";
import Cooperate from "./pages/users/post/cooperate";
import Around from "./pages/users/post/around";
import Bartending from "./pages/users/post/bartending";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.STORY,
            component: <Story />
        },
        {
            path: ROUTERS.USER.POST,
            component: <Post />,
            children: [
                {
                    path: ROUTERS.USER.COOPERATE,
                    component: <Cooperate />
                },
                {
                    path: ROUTERS.USER.AROUND,
                    component: <Around />
                },
                {
                    path: ROUTERS.USER.BARTENDING,
                    component: <Bartending />
                }
            ]
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <Product />
        },
        {
            path: ROUTERS.USER.PRODUCTITEM,
            component: <ProductItem />
        },
        {
            path: ROUTERS.USER.SHOPHOME,
            component: <HomeShop />,
        },
        {
            path: ROUTERS.USER.PRODUCTSHOP,
            component: <ProductShop />
        },
        {
            path: ROUTERS.USER.STORE,
            component: <Store />
        },
        {
            path: ROUTERS.USER.CONTACT,
            component: <Contact />
        },
    ];
    return (
        <MasterLayout>
        <Routes>
            {renderRoutes(userRouters)}
        </Routes>
    </MasterLayout>
    );
}

const renderRoutes = (routes) => {
        return routes.map((item, key) => (
            <Route key={key} path={item.path} element={item.component}>
                {item.children && renderRoutes(item.children)} {/* Xử lý route con */}
            </Route>
        ));
    };


const RouterCustom = () => {
    return renderUserRouter(); // Gọi hàm đã được đổi tên
}

export default RouterCustom;