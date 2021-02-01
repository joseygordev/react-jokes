import theme from '../../config/theme';

export default {
  buttons: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    margin: `${theme.spacing.margin}px 0`,
    flexDirection: 'column',
  },
  buttonsMobile: {
    flexDirection: 'row',
  }
};