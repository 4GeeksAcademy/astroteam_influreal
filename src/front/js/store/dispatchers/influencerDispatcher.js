export const loadInfluencersDispatcher = async () => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}api/influencer/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data, "Influencer Dispatcher data")
    return data
  } catch (error) {
    console.error(`Error cargando influencers ${error}`);
  }
};
