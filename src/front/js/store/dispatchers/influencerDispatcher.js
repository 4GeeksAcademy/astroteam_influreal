
export const loadInfluencersDispatcher = async () => {

    try {
        const response = await fetch(`${process.env.BACKEND_URL}influencer/all`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            }
        });

        return await response.json()


    } catch (error) {
        console.error(`Error cargando influencers ${error}`)
    }
}