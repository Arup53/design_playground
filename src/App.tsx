import StackCards from "./components/1.stack_cards/stackCards";
import FirstExample from "./components/2.Transition/firstExample/FirstExample";
import FourthExample from "./components/2.Transition/fourthExample/FourthExample";
import SecondExample from "./components/2.Transition/secondExample/SecondExample";
import ThirdExample from "./components/2.Transition/thirdExample/ThirdExample";
import FirstExampleKeyFrame from "./components/3.keyframe/firstExample/FirstExampleKeyFrame";
import SecondExampleKeyframe from "./components/3.keyframe/secondExample/SecondExampleKeyframe";
import ThirdKeyframeExample from "./components/3.keyframe/ThirdExample/ThirdKeyframeExample";

function App() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen w-full">
      {/* <StackCards />
      <FirstExample />
      <></> */}
      {/* <SecondExample /> */}
      {/* <ThirdExample /> */}
      {/* <FourthExample /> */}
      {/* <FirstExampleKeyFrame /> */}
      {/* <SecondExampleKeyframe /> */}
      <ThirdKeyframeExample />
    </div>
  );
}

export default App;
