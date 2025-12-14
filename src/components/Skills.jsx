function Skills() {
  const skills = [
    "React",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Git & GitHub",
    "APIs REST",
  ];

  return (
    <section style={styles.section}>
      <h3 style={styles.title}>Tecnologias</h3>

      <ul style={styles.list}>
        {skills.map((skill) => (
          <li key={skill} style={styles.item}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  section: {
    marginTop: "80px",
  },

  title: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#4b2e21",
    marginBottom: "24px",
    textAlign: "center",
  },

  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "14px",
  },

  item: {
    padding: "10px 18px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#4b2e21",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
};

export default Skills;
