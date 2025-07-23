export const fetchFromBackend = async (url, option) => {
  try {
    const response = await fetch("https://simplitubebackend.onrender.com/api/generate/",
 {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, option }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, error: "Backend request failed." };
  }
};
