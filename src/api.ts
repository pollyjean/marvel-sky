import md5 from "md5";

export const createURL = () => {
  const PUBLIC_KEY = "9e12817d4e7379d3451aaf359beb6834";
  const PRIVATE_KEY = "eab6a7f9b04c11ead7f40e70c496d1510a980eda";
  const BASE_URL = "https://gateway.marvel.com/v1/public";

  const ts = String(Date.now());
  const params = new URLSearchParams({
    ts: ts,
    apiKey: PUBLIC_KEY,
    hash: md5(ts + PUBLIC_KEY + PRIVATE_KEY),
  });
  const endpoint = `${BASE_URL}/characters?`;
  const url = endpoint + params;
  return url;
};

export const marvelHerosApi = async () => {
  const json = await (
    await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
    )
  ).json();
  return json;
};