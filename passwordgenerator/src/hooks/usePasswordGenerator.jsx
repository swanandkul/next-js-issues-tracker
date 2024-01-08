import { useState, useCallback, useEffect } from "react";

const usePasswordGenerator = (initialLength = 8) => {
  const [length, setLength] = useState(initialLength);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numsAllowed) str += "0123456789";
    if (symbolsAllowed) str += "!@#$%*&_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numsAllowed, symbolsAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numsAllowed, symbolsAllowed]);

  return {
    password,
    length,
    numsAllowed,
    symbolsAllowed,
    setLength,
    setNumsAllowed,
    setSymbolsAllowed,
    generatePassword,
  };
};

export default usePasswordGenerator;
