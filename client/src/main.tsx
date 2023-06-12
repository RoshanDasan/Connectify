import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import authReducer from './state';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { PersistGate, } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from './ErrorBoundary';

const persistConfig = { key: 'root', storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});
const queryClient = new QueryClient();

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
          <App />
          </ErrorBoundary>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
