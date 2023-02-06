
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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
    cursor:'pointer'
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
        <h1 className={classes.appbarTitle}onClick={()=>{ navigate('/');}}>
          My<span className={classes.colorText}>Quiz.</span>
        </h1>

        <h1 className={classes.colorText} onClick={()=>{ navigate('/login');}}>
          Log<span className={classes.colorWhite}>In</span>
        </h1>
      </Toolbar>
    </AppBar>
  );
}
export default Appbar;