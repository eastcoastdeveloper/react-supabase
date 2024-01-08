function Loader() {
  const loaderStyle = {
    margin: "auto",
    border: "1px solid white",
    padding: "10px 20px",
    font: "bold 20px sans-serif",
    textTransform: "uppercase",
  };

  return <span style={loaderStyle}>Loading...</span>;
}

export default Loader;
