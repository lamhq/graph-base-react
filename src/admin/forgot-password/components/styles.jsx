import {
  cardTitle,
  whiteColor,
} from '../../../common/material-ui/assets/jss/material-dashboard-pro-react';

const loginPageStyle = () => ({
  textCenter: {
    textAlign: 'center',
  },
  cardTitle: {
    ...cardTitle,
    color: whiteColor,
    fontSize: '1.2rem',
  },
  cardHidden: {
    opacity: '0',
    transform: 'translate3d(0, -60px, 0)',
  },
  cardHeader: {
    marginTop: '-40px !important',
    background: 'linear-gradient(60deg,#2a035c, #30016d) !important',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(42, 1, 95,.4) !important',
    color: '',
  },
  cardBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
    flexDirection: 'column',
  },
  socialLine: {
    textAlign: 'left',
  },
  resetButton: {
    marginBottom: '100px',
    backgroundColor: '#19C2A8',
  },
  goBackButton: {
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: '20px',
  },
});

export default loginPageStyle;
