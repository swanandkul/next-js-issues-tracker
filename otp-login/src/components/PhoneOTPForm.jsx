import { useState } from "react";
import OTPInput from "./OTPInput";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

const PhoneOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Phone validations
    const regex = /[^0-9]/g;

    if (phoneNumber.length < 10 && regex.test(phoneNumber)) {
      alert("Please enter valid phone number");
      return;
    }

    // call backend api
    // show otp input
    setShowOtpInput(true);
  };

  const handleOTPSubmit = (otp) => {
    console.log("Login successfull", otp);
  };

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handleSubmit} className="form">
          <TextField
            sx={{
              p: 1,
              m: 0,
            }}
            label="Enter Phone Number"
            onChange={handlePhoneNumber}
          />
          <Button
            sx={{
              p: 1,
              m: 1,
            }}
            type="submit"
            variant="contained"
          >
            Get OTP
          </Button>
        </form>
      ) : (
        <div>
          <p>
            Enter OTP sent to{" "}
            <Button
              sx={{
                p: 1,
                m: 1,
              }}
              type="submit"
              variant="contained"
            >
              {phoneNumber}
            </Button>
          </p>
          <OTPInput length={4} onOTPSubmit={handleOTPSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOTPForm;
