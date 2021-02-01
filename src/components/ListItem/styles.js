import theme from '../../config/theme';

const lineItem = {
  background: theme.colors.white,
  borderRadius: '0.5rem',
  boxShadow: '0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.25)',
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing.padding * 2,
  margin: `${theme.spacing.margin}px auto`,
  width: '100%',
  flexDirection: 'column',
  borderLeft: `1rem solid ${theme.colors.secondary}`
};

export default {
  listLine: {
    ...lineItem
  },
  listButton: {
    ...lineItem,
  },
  listButtonHover: {
    opacity: .5,
    cursor: 'pointer',
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    margin: 0,
    textTransform: 'capitalize',
  },
  listContent: {
    fontSize: '1.25rem',
    textTransform: 'capitalize',
    margin: `${theme.spacing.margin}px 0px 0px`,
    textAlign: 'left',
  },
};