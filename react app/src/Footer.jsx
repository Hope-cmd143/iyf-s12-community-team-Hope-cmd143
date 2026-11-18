function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", color: "white", padding: "30px 20px", textAlign: "center", marginTop: "40px" }}>
      <h3>Hope Community Team</h3>
      <p>Building hope together, one community at a time.</p>
      <p>
        <a href="#" style={{ color: "white", margin: "0 10px" }}>Home</a>
        <a href="#" style={{ color: "white", margin: "0 10px" }}>About</a>
        <a href="#" style={{ color: "white", margin: "0 10px" }}>Contact</a>
      </p>
      <p style={{ fontSize: "14px", opacity: 0.7 }}>
        © {new Date().getFullYear()} Hope Community Team. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
