import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [foundUser, setFoundUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const users = [
    {
      name: "ميس",
      message: "لوفي حبي ",
      photo: "/star.png",
      secondImage: "/lib.png",
      thirdImage: "/arr4.png",
      bg: "#6185E0",
      cardBg: "#ffffff",
      textColor: "#2c3e50",
      borderColor: "#b8d3ee",
      borderRadius: "20px",
      fontFamily: "arial, sans-serif",
      shadow: "0 10px 30px rgba(0,0,0,0.2)"
    }
  ];

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = () => {
    const user = users.find((u) => u.name.trim() === search.trim());

    if (user) {
      setFoundUser(user);
      setNotFound(false);
    } else {
      setFoundUser(null);
      setNotFound(true);
    }
  };

  if (foundUser) {
    return (
      <div className="user-screen" style={{ backgroundColor: foundUser.bg }}>
        {/* RIGHT SIDE IMAGE */}
        <img
          src={foundUser.photo}
          alt="user"
          className="user-photo"
        />

        {/* TOP LEFT DECORATION IMAGE */}
        <img
          src={foundUser.secondImage}
          alt="decoration"
          className="top-decoration"
        />

        {/* LEFT BOTTOM DECORATION IMAGE */}
        <img
          src={foundUser.thirdImage}
          alt="decoration"
          className="bottom-decoration"
        />

        {/* CARD */}
        <div
          className="user-card"
          style={{
            background: foundUser.cardBg,
            borderRadius: foundUser.borderRadius,
            borderColor: foundUser.borderColor,
            boxShadow: foundUser.shadow,
            color: foundUser.textColor
          }}
        >
          <h2>{foundUser.message}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="start-screen">
      <h1>عيدكم مبارك!</h1>

      <input
        type="text"
        placeholder="اكتب اسمك الذي تنعتك به المهنئة "
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setNotFound(false);
        }}
        className="search-input"
      />

      <button onClick={handleSearch} className="search-button">
        بحث
      </button>

      {notFound && (
        <p className="error-message">متأكد من اسمك؟ حاول مرة أخرى</p>
      )}

      <img src="/start3.png" alt="decoration" className="start-decoration" />
    </div>
  );
}