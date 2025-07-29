export const fetchFromBackend = async (url, option) => {
  

  try {
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, option }),
    });

    return await response.json();
  } catch (error) {
    return { success: false, error: "Backend request failed." };
  }
};
