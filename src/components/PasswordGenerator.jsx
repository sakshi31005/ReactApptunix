import { useState, useCallback, useEffect, useRef } from "react";

function PassGenerate() {
  const [Generator, setGenerator] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordref = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,7)
    window.navigator.clipboard.writeText(password)
  }, [password]);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%&_";
    
    for (let i = 0; i < Generator; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [Generator, number, char]);

  useEffect(() => {
    passwordGenerator();
  }, [Generator, number, char, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-black-600 bg-black-300 ">
      <h1 className="flex flex-center justify-center">password Generator</h1>
      <div className="flex flex-shadow rounded-lg overflow-hidden mb-4 border-2">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 border-2"
          placeholder="password"
          readOnly
          ref={passwordref}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-green-600 px-3 py-0.5 shrink-0 text-white cursor-pointer"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={30}
            className="cursor-pointer"
            value={Generator}
            onChange={(e) => {
              setGenerator(Number(e.target.value));
            }}
          />
          <label>setlength:</label>
        </div>

        <div>
          <input
            type="checkbox"
            defaultChecked={number}
            id="inputNumber"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="">number</label>
        </div>

        <div>
          <input
            type="checkbox"
            defaultChecked={number}
            id="inputNumber"
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label htmlFor="">character</label>
        </div>
      </div>
    </div>
  );
}
export default PassGenerate;
