const baseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_LOCAL_STRAPI_URL
    : process.env.NEXT_PUBLIC_STRAPI_URL;

const getHomepageData = async () => {
  const response = await fetch(`${baseUrl}/homepage?populate=*`);
  const data = await response.json();

  return data;
};

const getAboutpageData = async () => {
  const response = await fetch(`${baseUrl}/aboutpage?populate=*`);
  const data = await response.json();

  return data;
};

const getProjects = async () => {
  const response = await fetch(`${baseUrl}/projects?populate=*`);
  const data = await response.json();

  console.log(data);

  return data;
};

const strapiService = {
  getHomepageData,
  getAboutpageData,
  getProjects,
};

export default strapiService;
