// useAuthorization.js
import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRoles } from "./service"; // Import your getRoles function from service.js

const useAuthorization = (allowedRoles) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Create an async function to fetch user roles
    const fetchUserRoles = async () => {
      try {
        // Call the API to fetch user roles
        const userRoles = await getRoles();
        // Check if the user's role is authorized to access the route
        setIsAuthorized(allowedRoles.some((role) => userRoles.includes(role)));
      } catch (error) {
        console.error("Error fetching user roles:", error);
        // Handle any error that occurred during the API call, e.g., redirect to an error page
      }
    };

    fetchUserRoles();
  }, [allowedRoles]);

  if (!isAuthorized) {
    // User is not authorized, navigate to an appropriate page (e.g., unauthorized)
    navigate("/unauthorized");
    return null; // Render nothing or a loading state, as the navigation is happening
  }

  return true;
};

export default useAuthorization;
