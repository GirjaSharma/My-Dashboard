const BASE_URL = import.meta.env.VITE_API_URL;
const REQUEST_TIMEOUT = 10000;

export const getDashboardSummary= async(path="/api/dashboard/summary")=>{
    if(!BASE_URL){
        throw new Error("Missing VITE_API_URL");
    }

    try{
        const response = await fetch(`${BASE_URL}${path}`, {
            signal: AbortSignal.timeout(REQUEST_TIMEOUT)
        });

        if(!response.ok){
            throw new Error(`failed to fetch dashboard summary: ${response.status}`);
        }
        const data = await response.json();
        console.log("Success", data)
        return data;
    } catch(error){
            console.error("Fetch failed due to network error", error);
            throw error;
        }
}
