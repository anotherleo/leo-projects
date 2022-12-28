import { ComputerAnimation } from "./components/LottieAnimations/ComputerAnimation";
import { WelcomeAnimation } from "./components/LottieAnimations/WelcomeAnimation";

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
			<WelcomeAnimation />
			<ComputerAnimation />
    </div>
  );
}

export default App;
