function Header({ showForm, setFormState }) {
  const h1Style = {
    fontSize: "22px",
    textTransform: "uppercase",
    fontFamily: "Coiny, sans-serif",
    lineHeight: 1,
    marginTop: "6px",
    color: "#292524",
  };

  const headerStyle = {
    backgroundColor: "#B0E0E6",
    position: "relative",
    padding: "10px",
    display: "grid",
    gridTemplateColumns: "auto 100px",
    marginBottom: "10px",
    borderRadius: "4px",
  };

  const buttonStyle = {
    textAlign: "center",
    cursor: "pointer",
  };

  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>Movie Search</h1>
      <button style={buttonStyle} type="button" onClick={() => setFormState((toggle) => !toggle)}>
        {showForm ? "Close" : "Share Movie"}
      </button>
    </header>
  );
}

export default Header;
