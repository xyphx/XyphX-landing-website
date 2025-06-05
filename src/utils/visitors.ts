export async function updatePortfolioVisitors() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/visitors/portfolio/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();
    console.log(result); 
    return result;
  } catch (error) {
    console.error("Error updating portfolio visitors:", error);
    return { error: "Network error" };
  }
}
