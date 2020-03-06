import { handleApiError } from "../helpers";
const apiUrl = process.env.REACT_APP_API_URL;
export type AuthInfo = { email: string; password: string };

export async function signInAPI(authInfo: AuthInfo) {
  const response = await fetch(apiUrl + "/super_admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authInfo)
  });
  return handleApiError(response);
}

export async function resetPasswordAPI(email: string) {
  const response = await fetch(apiUrl + "/super_admin/reset_password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });
  return handleApiError(response);
}
