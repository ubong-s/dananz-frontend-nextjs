const baseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_LOCAL_STRAPI_URL
    : process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetcher(url: string, options = {}): Promise<any> {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  const data = await response.json();
  return data;
}

const getHomepage = async () => {
  const response = await fetch(`${baseUrl}/homepage?populate=*`);
  const data = await response.json();

  return data;
};

const strapiService = {
  getHomepage,
  fetcher,
};

export default strapiService;
