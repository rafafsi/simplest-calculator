const Button = ({ handle, text, style }) => {
  return (
    <button className={style} onClick={handle}>
      {" "}
      {text}
    </button>
  );
};

export default Button;
