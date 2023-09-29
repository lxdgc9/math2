// routes
import { paths } from 'src/routes/paths';

// API
// ----------------------------------------------------------------------

export const HOST_API = process.env.REACT_APP_HOST_API;
export const IMAGE_HOST_API = process.env.REACT_APP_IMAGE_HOST_API;
export const ASSETS_API = process.env.REACT_APP_ASSETS_API;

export const FIREBASE_API = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const AMPLIFY_API = {
  userPoolId: process.env.REACT_APP_AWS_AMPLIFY_USER_POOL_ID,
  userPoolWebClientId: process.env.REACT_APP_AWS_AMPLIFY_USER_POOL_WEB_CLIENT_ID,
  region: process.env.REACT_APP_AWS_AMPLIFY_REGION,
};

export const AUTH0_API = {
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  callbackUrl: process.env.REACT_APP_AUTH0_CALLBACK_URL,
};

export const MAPBOX_API = process.env.REACT_APP_MAPBOX_API;

export const VIETTEL_API_KEY = process.env.REACT_APP_VIETTEL_AI_TOKEN;

// IFAME
export const IFRAME_GOOGLE_PRESENTATION = process.env.REACT_APP_GOOGLE_PRESENTATION;
export const CHAT_AI = process.env.REACT_APP_CHAT_AI;

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.home.bieu_do.bieu_do_duong; // as '/home'
