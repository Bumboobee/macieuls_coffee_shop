import * as ButtonStyle from "./style";

function Button({ icon, text, bordercolor, background, color, onClick, type }) {
  return (
    <ButtonStyle.Button
      bordercolor={bordercolor}
      background={background}
      color={color}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </ButtonStyle.Button>
  );
}

export default Button;
