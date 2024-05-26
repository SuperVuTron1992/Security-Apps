const DownloadStuff = async (
  theFileName: String | undefined,
  token: String | undefined,
) => {
  const response = await fetch(
    `https://fluxdux.com/getJWT/${theFileName}/${token}`,
  );

  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    console.error(message);
    return;
  }

  const jsonData = await response.json();
  return jsonData;
};

export default {
  DownloadStuff,
};
