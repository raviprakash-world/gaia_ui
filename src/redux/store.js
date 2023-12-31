import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import rootReducer from "./reducers"; // Combine your reducers into a root reducer

const encryptor = encryptTransform({
  secretKey: "muthu@123",
  onError: function (error) {
    console.log(error);
  },
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { store, persistor };
