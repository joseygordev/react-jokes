import theme from '../../config/theme';

export default {
  root: {
    width: '100%',
    height: 60,
    backgroundColor: 'red',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: '1rem',
    color: theme.colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: theme.spacing.padding * 1.4
  }
};
