const token = "65fd010a63dad3f6763e7f8095ab2029da535c7f21e51aac";

export const server_calls = {
  get: async () => {
    const response = await fetch(`https://mcp-api.onrender.com/api/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-access-token": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the server");
    }

    return await response.json();
  },

  create: async (data: any = {}) => {
    console.log(data);
    const response = await fetch(`https://mcp-api.onrender.com/api/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-access-token": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create new data on the server");
    }

    return await response.json();
  },

  update: async (id: string, data: any = {}) => {
    const response = await fetch(
      `https://mcp-api.onrender.com/api/projects/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update data on the server");
    }

    return await response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(
      `https://mcp-api.onrender.com/api/projects/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete data from the server");
    }

    return;
  },
  get_r: async () => {
    const response = await fetch(`https://mcp-api.onrender.com/api/resumes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-access-token": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the server");
    }

    return await response.json();
  },

  create_r: async (resumeData: any = {}) => {
    const response = await fetch(`https://mcp-api.onrender.com/api/resumes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-access-token": `Bearer ${token}`,
      },
      body: JSON.stringify(resumeData),
    });

    if (!response.ok) {
      throw new Error("Failed to create new data on the server");
    }

    return await response.json();
  },

  update_r: async (id: string, resumeData: any = {}) => {
    const response = await fetch(
      `https://mcp-api.onrender.com/api/resumes/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
        body: JSON.stringify(resumeData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update data on the server");
    }

    return await response.json();
  },

  delete_r: async (id: string) => {
    const response = await fetch(
      `https://mcp-api.onrender.com/api/resumes/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete data from the server");
    }

    return;
  },
};
