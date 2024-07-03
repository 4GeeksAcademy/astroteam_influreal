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

export const addInfluencerDispatcher = async (influencer) => {

  try {
    const response = await fetch(`${process.env.BACKEND_URL}influencer/create`, {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify(influencer)
    });

    if (response.ok) {
      return {
        success: true
      }
    }
    return {
      success: false,
      message: "Error al añadir un influencer"
    }

  } catch (error) {
    console.error("Error al añadir un influencer", error);
    return {
      success: false,
      message: "Error al añadir un influencer"
    }
  }
}