import MuiAlert, { AlertProps, Color } from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

interface propsI {
  isOpen: boolean;
  handleClose: () => void;
  autoHideDuration?: number;
  severity?: Color;
  msg?: string;
}

export function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="outlined" {...props} />;
}

export function SnackbarComp({
  isOpen,
  handleClose,
  autoHideDuration = 3000,
  msg = "this is success message",
  severity = "success",
}: propsI) {
  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
