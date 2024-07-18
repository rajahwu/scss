import "./bundle.css";
import { FlipWords } from "../ui/flip-words";

function App() {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <>
      <div>
        <h1>Portfolio</h1>
        <p>Rajawu</p>
      </div>
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Build
          <FlipWords words={words} /> <br />
          websites with Aceternity UI
        </div>
      </div>
    </>
  );
}

export default App;
