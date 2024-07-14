import { QueryProp } from "./types";

const headers = {
  Authorization: `Client-ID ${process.env.UNSPLASH_ACCES_KEY}`,
};

export const fetchPhotos = async ({ queries }: { queries?: QueryProp[] }) => {
  const url = new URL("https://api.unsplash.com/photos");
  console.log(queries);

  for (const query of queries!) {
    url.searchParams.append("query", query.query);
  }

  // url.searchParams.append("license", "free");
  url.searchParams.append("order_by", "popular");
  url.searchParams.append("per_page", "10");

  const response = await fetch(url, {
    // cache: "no-store",
    headers,
  });
  const data = await response.json();
  return data;
};

export const fetchPhoto = async (id: string) => {
  const url = new URL(`https://api.unsplash.com/photos/${id}`);
  const response = await fetch(url, {
    headers,
  });
  const data = await response.json();
  return data;
};

export const fetchRandomPhoto = async () => {
  const url = new URL(`https://api.unsplash.com/photos/random`);
  url.searchParams.append("orientation", "landscape");
  const response = await fetch(url, {
    headers,
  });
  const data = await response.json();
  return data;
};
