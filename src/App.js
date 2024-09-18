import React from "react";

const people = [
  ["Ayan", 23, "M"],
  ["Akash", 28, "M"],
  ["Riya", 34, "F"],
  ["Sharma", 45, "M"],
  ["Maya", 32, "F"],
];

const MyStyledComponent = () => {
  const bodyStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    margin: 0,
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const h1Style = {
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2rem",
  };

  const containerStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    transition: "transform 0.3s ease-in-out",
  };

  const ulStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const liStyle = {
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
  };

  const oddLiStyle = {
    backgroundColor: "#f1f1f1",
  };

  const nameStyle = {
    fontWeight: "bold",
    color: "#007BFF",
    fontSize: "1.2rem",
  };

  const ageStyle = {
    fontStyle: "italic",
    marginLeft: "10px",
    color: "#666",
  };

  const genderStyle = {
    marginLeft: "10px",
    color: "#888",
    fontSize: "0.9rem",
  };

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <h1 style={h1Style}>User List</h1>
        <ul style={ulStyle}>
          {people.map((person, index) => {
            const [name, age, gender] = person;
            const isOdd = index % 2 === 1;
            return (
              <li
                key={index}
                style={{
                  ...liStyle,
                  ...(isOdd ? oddLiStyle : {}),
                }}
              >
                <span style={nameStyle}>{name}</span>
                <span style={ageStyle}>{age}</span>
                <span style={genderStyle}>
                  {gender === "M" ? "Male" : "Female"}
                </span>
              </li>
            );
          })} 
        </ul>
      </div>
    </div>
  );
};

export default MyStyledComponent;
