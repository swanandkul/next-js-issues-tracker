import { useEffect, useRef, useState } from "react";

const OTPInput = ({ length = 4, onOTPSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];

    //allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOTPSubmit(combinedOtp);

    //Move cursor to next empty input if current is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[newOtp.indexOf("")].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    //Move cursor to previous empty input
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && inputRefs.current[index - 1]) {
      //Move cursor to previous input after pressing backspace
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <>
            <input
              type="text"
              key={index}
              value={value}
              ref={(input) => (inputRefs.current[index] = input)}
              onChange={(e) => {
                handleChange(index, e);
              }}
              onKeyDown={(e) => {
                handleKeyDown(index, e);
              }}
              onClick={() => {
                handleClick(index);
              }}
              className="otp-input"
            />
          </>
        );
      })}
    </div>
  );
};

export default OTPInput;
