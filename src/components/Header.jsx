function Header() {
  return (
    <header style={styles.header}>
      <div>
        <h2 style={styles.name}>Tamires Alves</h2>
        <span style={styles.role}>Full Stack Developer</span>
      </div>
    </header>
  );
}

const styles = {
  header: {
    padding: "24px",
    borderBottom: "1px solid #e0d6ce",
  },

  name: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
    color: "#4b2e21",
  },

  role: {
    fontSize: "14px",
    color: "#6a4a3a",
  },
};

export default Header;
