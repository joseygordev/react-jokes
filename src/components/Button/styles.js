import theme from '../../config/theme';

export default {
  root: {
    fontWeight: 'bold',
    fontSize: '1rem',
    margin: `${theme.spacing.margin * 1.4}px 0px`,
    textTransform: 'uppercase',
    padding: `${theme.spacing.padding}px ${theme.spacing.padding * 3}px`,
    background: theme.colors.secondary,
    borderRadius: 5,
    cursor: 'pointer',
    lineHeight: 1.4,
    color: theme.colors.white,
    width: '100%',
  },
  mobile: {
    width: 'auto',
  },
  hover: {
    boxShadow: '0 0.125rem 0.25rem rgba(0,0,0,0.25)',
    opacity: .75
  }
};
