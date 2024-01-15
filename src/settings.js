const breakpoints = {
  base: '1920px',
  wide: '1600px',
  screen: '1420px',
  desktop: '1300px',
  tabletLarge: '1200px',
  tablet: '980px',
  mobile: '765px',
  sMobile: '660px',
}

export const devices = {
  base: `@media only screen and (min-width: ${breakpoints.base})`,
  wide: `@media only screen and (min-width: ${breakpoints.wide})`,
  screen: `@media only screen and (min-width: ${breakpoints.screen})`,
  desktop: `@media only screen and (min-width: ${breakpoints.desktop})`,
  tabletLarge: `@media only screen and (min-width: ${breakpoints.tabletLarge})`,
  tablet: `@media only screen and (min-width: ${breakpoints.tablet})`,
  mobile: `@media only screen and (min-width: ${breakpoints.mobile})`,
}