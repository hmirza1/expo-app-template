import createApiClient from '@futureclinic-platform/api-client';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

// Get the API URL based on environment
const getApiUrl = () => {
  if (__DEV__) {
    // In development, use your computer's IP address
    // Replace this with your actual local IP when developing
    const debuggerHost = Constants.expoConfig?.hostUri;
    const localhost = debuggerHost?.split(':')[0];

    // Assuming your API runs on port 3000
    return `http://${localhost}:3000`;
  }

  // For production/staging, use environment variables
  return Constants.expoConfig?.extra?.apiUrl || 'https://api.futureclinic.com';
};

// Create the Hono RPC client
export const api = createApiClient(getApiUrl());

// Example typed API calls:
// const organizations = await api.v1.organizations.$get();
// const encounter = await api.v1.encounters[':id'].$get({ param: { id: '123' } });
// const authResult = await api.v1.auth.signin.$post({ json: { email, password } });

// // Token management
// let authToken: string | null = null;

// const getAuthToken = async () => {
//   if (!authToken) {
//     authToken = await SecureStore.getItemAsync("auth_token");
//   }
//   return authToken;
// };

// export const setAuthToken = async (token: string) => {
//   authToken = token;
//   await SecureStore.setItemAsync("auth_token", token);
// };

// export const clearAuthToken = async () => {
//   authToken = null;
//   await SecureStore.deleteItemAsync("auth_token");
// };
