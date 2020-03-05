export type AuthInfo = { email: string; password: string };

export async function signInAPI(authInfo: AuthInfo) {
  try {
    const response = await fetch("http://3.6.241.6/api/v1/super_admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authInfo)
    });
    const data = await response.json();
    if (!response.ok) throw Error(data.message);
    return data;
  } catch (e) {
    throw e;
  }
}

export async function resetPassword(email: string) {
  try {
    const response = await fetch(
      "http://3.6.241.6/api/v1/super_admin/reset_password",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      }
    );
    const data = await response.json();
    if (!response.ok) throw Error(data.message);
    return data;
  } catch (e) {
    throw e;
  }
}
