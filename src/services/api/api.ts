export async function fetchData(url: string): Promise<unknown> {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}
