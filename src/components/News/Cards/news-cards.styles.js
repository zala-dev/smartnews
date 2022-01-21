import { makeStyles } from '@material-ui/core';

export default makeStyles({
  container: {
    padding: '0 5%',
    width: '100%',
    margin: 0,
    alignItems: 'stretch',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: '#fff',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  tips: {
    position: 'absolute',
    top: '15%',
    left: '8%',
    margin: '0 auto',
    color: 'blue',
    fontWeight: '400',
  },
  primary: {
    color: 'red',
  },
});
