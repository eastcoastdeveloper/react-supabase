function Error() {
  const errorStyle = {
    margin: "auto",
    border: "1px solid white",
    padding: "10px 20px",
    font: "bold 20px sans-serif",
  };

  return <span style={errorStyle}>There was a problem loading the data</span>;
}

export default Error;
