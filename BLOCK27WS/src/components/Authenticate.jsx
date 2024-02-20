import { useState } from "react";

const Authenticate = ({ token }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  console.log("Token: ", token);

  async function handleClick() {
    try {
      if (!token) {
        setSuccessMessage(null);
        setError("Please sign up before authenticating token.");
        return;
      }

      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log("Authenticate Result: ", result);

      // If authentication of token was successful...
      if (result.success) {
        setError(null);
        setSuccessMessage(`${result.data.username}, you're ${result.message}`);
      } else {
        // Otherwise, not successful; null or invalid token.
        setSuccessMessage(null);
        setError(`Please provide a valid token.`);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate!</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
};

export default Authenticate;