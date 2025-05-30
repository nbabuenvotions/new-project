import { apires } from "./CommonAPI";

export const registerUsers = async (user) => {
  return await apires({
    method: "POST",
    url: "/users",
    data: user,
  });
};
