export const getData = async (fileName: string) => {
  try {
    const response = await fetch(`/${fileName}`);
    const data = await response.text();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
