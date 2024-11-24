import React from "react";

const Header = ({ title }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{title}</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "2rem",
  },
};

export default Header;
