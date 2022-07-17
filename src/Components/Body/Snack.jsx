import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snack = (props) => {
  return (
    <Snackbar open={props.opn} autoHideDuration={6000} onClose={props.cls}>
      <Alert
        onClose={props.cls}
        severity={props.masg[1]}
        sx={{ width: "100%" }}
      >
        {props.masg[0]}
      </Alert>
    </Snackbar>
  );
};

export default Snack;
