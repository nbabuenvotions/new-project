import $axios from "./config";

export const apires = async ({ method, url, data }) => {
    const lastPart = url?.split("/").pop();
    try {
      const response = await $axios({ method, url, data });
      return response.data;
    } catch (error) {
      const status = error?.response?.status;
  
      // if (status === 401) {
      //   Cookie.remove("token");
      // }
  
      // const isAuthError = [401, 403, 400].includes(status);
      // const shouldRedirect =
      //   lastPart !== "login" && lastPart !== "change-password";
  
      // if (isAuthError && shouldRedirect) {
      //   window.location.href = "/";
      // }
  
      console.error(`API Error [${status}] on ${url}:`, error);
      throw error;
    }
  };
