import Influencer from "../../pages/influencer";

export const loadInfluencersDispatcher = async () => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}influencer/all`, {
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

export const loadSingleInfluencerDispatcher = async (id) => {
  try {

    const response = await fetch(`${process.env.BACKEND_URL}influencer/${id}`);
    const data = await response.json()
    if (response.ok) {
      console.log(data.influencer)
      return {
        success: true,
        influencer: data.influencer
      }
    }
    return {
      succes: false,
      message: data.message
    }

  } catch (error) {
    console.error("Error recogiendo el influencer", error);
    return {
      success: false,
      message: error
    }
  }

}