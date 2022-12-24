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

const getTeampageData = async () => {
  // const response = await fetch(`${baseUrl}/our-team?populate=*`);

  const response1 = await fetch(`${baseUrl}/our-team?populate=*`).then((res) =>
    res.json()
  );
  const response2 = await fetch(`${baseUrl}/team-members?populate=*`).then(
    (res) => res.json()
  );
  const [pageData, members] = await Promise.all([response1, response2]);

  return { pageData, members };
};

const getProjects = async () => {
  const response = await fetch(`${baseUrl}/projects?populate=*`);
  const data = await response.json();

  return data;
};

const getSingleProject = async (slug: string) => {
  const response = await fetch(`${baseUrl}/projects/slug/${slug}?populate=*`);
  const data = await response.json();

  return data;
};

const strapiService = {
  getHomepageData,
  getAboutpageData,
  getTeampageData,
  getProjects,
  getSingleProject,
};

export default strapiService;
