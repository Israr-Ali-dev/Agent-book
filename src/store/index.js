import { createStore, persist } from "easy-peasy";
//import { createLogger } from "redux-logger";
import setting from "./setting";
//import authStore from "./auth";

const modal = persist(
  {
    //auth: authStore,
    setting: setting,
  },
  {
    whitelist: ["setting"],
    storage: "localStorage",
  }
);

const middleware = [];

if (process.env.NODE_ENV !== "production") {
  // should be include in the development environment only
  // const logger = createLogger();
  // middleware.push(logger);
}

const config = {
  middleware,
};

const store = createStore(modal, config);

export default store;
