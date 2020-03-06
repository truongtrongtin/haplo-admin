export async function handleApiError(response: Response) {
  const data = await response.json();
  if (!response.ok) throw Error(data.message);
  return data;
}
