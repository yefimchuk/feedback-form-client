import decor from "../../../assets/decor.png";
import {
  DecorationContainer,
  DecorationImage,
} from "./Decoration.styledComponent";

const Decoration = () => {
  return (
    <DecorationContainer>
      <DecorationImage src={decor} />
    </DecorationContainer>
  );
};

export default Decoration;
