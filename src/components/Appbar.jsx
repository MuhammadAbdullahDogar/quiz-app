
import { Toolbar, AppBar, Button } from '@mui/material';
import { makeStyles } from "@mui/styles"
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
    display: 'none'
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  colorText: {
    color: '#fff',
    cursor: 'pointer'
  },
  colorWhite: {
    color: '#fff',
  }
}));
function Appbar() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <AppBar sx={{ background: 'none' }} elevation={0}>
      <Toolbar className={classes.appbarWrapper}>
        <h2 className={classes.appbarTitle} onClick={() => { navigate('/'); }}>
          <span className={classes.colorText}>Quizify</span>
        </h2>
        <Button className={classes.colorText} color="inherit" onClick={() => { navigate('/login'); }}>Login</Button>
        <Button className={classes.colorText} color="inherit" onClick={() => { navigate('/signup'); }}>SignUP</Button>
      </Toolbar>
    </AppBar>
  );
}
export default Appbar;