const size = {
  xs: '360px',
  s: '576px',
  m: '768px',
  l: '992px',
  xl: '1200px',
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  s: `(min-width: ${size.s})`,
  m: `(min-width: ${size.m})`,
  l: `(min-width: ${size.l})`,
  xl: `(min-width: ${size.xl})`,
  touch: `(hover: none) and (pointer: coarse)`,
  mouse: '(min-width: 538px) and (min-height: 720px)',
};
