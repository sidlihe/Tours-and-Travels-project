// This is your future FastAPI backend URL
const API_BASE_URL = "http://127.0.0.1:8000/api"; 

// Temporary data until your FastAPI backend is ready
const SAMPLE_TOURS = [
  { 
    id: 1, 
    title: "Beautiful Goa beaches", 
    duration: "4 Days, 3 Nights", 
    price: "₹12,500", 
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 2, 
    title: "Kerala Backwaters Tour", 
    duration: "5 Days, 4 Nights", 
    price: "₹18,000", 
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 3, 
    title: "Manali Snowy Escapes", 
    duration: "6 Days, 5 Nights", 
    price: "₹15,500", 
    image: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?auto=format&fit=crop&w=600&q=80" 
  }
];

// Fetch packages function
export const getTourPackages = async () => {
  try {
    // When your FastAPI is ready, we will uncomment these lines:
    // const response = await fetch(`${API_BASE_URL}/tours`);
    // return await response.json();
    
    return SAMPLE_TOURS; // For now, return sample data
  } catch (error) {
    console.error("Error fetching data:", error);
    return SAMPLE_TOURS;
  }
};

// Send user booking inquiry to backend
export const sendInquiry = async (formData) => {
  try {
    console.log("Ready to send this data to FastAPI:", formData);
    
    // Simulating success response from FastAPI
    return { success: true, message: "Inquiry submitted successfully!" };
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return { success: false, message: "Submission failed" };
  }
};