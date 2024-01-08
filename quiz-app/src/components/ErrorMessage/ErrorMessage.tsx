import { Button } from "@mui/material";

const ErrorMessage = ({ children }: any) => {
  return (
    <Button variant="contained" color="error" className="error-msg">
      {children}
    </Button>
  );
};

export default ErrorMessage;
