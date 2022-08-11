const CLIENT_ID = "eroauhNFSRgaJ0ywQBDb8UnKJ6_je9AK0A--6WNuPN8";

export type ImageEndpoint = {
  id: string;
  urls: {
    full: string;
  };
};

export const fetcher = (endpoint = "") => {
  const params = new URLSearchParams({client_id: CLIENT_ID});
  const request = fetch(`https://api.unsplash.com/${endpoint}/?${params}`).then<
    ImageEndpoint[]
  >((res) => res.json());
  return request;
};
