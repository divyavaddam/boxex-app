const Box = (props) => {
  //  Write your code here.
  const { className, size } = props;
  <div className={`box-container ${className}`}>
    <p className="para">{size}</p>
  </div>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="yellow-box" size="Small" />
      <Box className="blue-box" size="Medium" />
      <Box className="pink-box" size="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
