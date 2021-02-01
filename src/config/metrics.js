export const sizes = {
  hugeDesktop: '1200px',
  desktop: '992px',
  tablet: '768px',
  phone: '576px',
};

export const metrics = {
  desktop: `(min-width: ${sizes.desktop})`,
  tablet: `(min-width: ${sizes.tablet})`,
  phone: `(min-width: ${sizes.phone})`
};

export default {
  metrics,
  sizes
};