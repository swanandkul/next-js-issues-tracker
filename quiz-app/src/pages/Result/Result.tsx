import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";
import { Button } from "@mui/material";

const Result = ({ name, score }: any) => {
  const history = useNavigate();

  useEffect(() => {
    if (!name) {
      history("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};
export default Result;
