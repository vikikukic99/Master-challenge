"use client";

import {Provider} from "react-redux";
import store from "@/app/store";

const ServerProvider = async ({children}) => {
    return (
        <Provider store={store}>{children}</Provider>
    );
};

export default ServerProvider;
