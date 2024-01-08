import { useRef } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";
import usePasswordGenerator from "./hooks/usePasswordGenerator";

function App() {
  const {
    password,
    length,
    numsAllowed,
    symbolsAllowed,
    setLength,
    setNumsAllowed,
    setSymbolsAllowed,
  } = usePasswordGenerator();

  const passwordRef = useRef();

  const handleCopyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <Card>
      <h2 className="text-center text-white my-3 text-lg">
        Password Generator
      </h2>
      <div className="flex rounded-lg overflow-hidden mb-4">
        <Input
          type="text"
          placeholder="Password"
          value={password}
          readOnly
          currentRef={passwordRef}
        />
        <Button buttonLabel="Copy" onClick={handleCopyPasswordToClipboard} />
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            name=""
            id=""
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <Checkbox
          labelText="Numbers"
          onChange={() => setNumsAllowed((prev) => !prev)}
          defaultChecked={numsAllowed}
        />
        <Checkbox
          labelText="Symbols"
          onChange={() => setSymbolsAllowed((prev) => !prev)}
          defaultChecked={symbolsAllowed}
        />
      </div>
    </Card>
  );
}

export default App;
