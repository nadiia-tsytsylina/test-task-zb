import { ThreeCircles } from "react-loader-spinner";
import { LoaderBox } from "./Loader.styled";

export default function Loader() {
  return (
    <LoaderBox>
      <ThreeCircles
        height="100"
        width="100"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="var(--dark-blue)"
        innerCircleColor="var(--bronze)"
        middleCircleColor="var(--white-text)"
      />
    </LoaderBox>
  );
}
