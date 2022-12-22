// Media query breakpoints
export const SCREEN_XS_MIN = 480;
export const SCREEN_SM_MIN = 600;
export const SCREEN_MD_MIN = 960;
export const SCREEN_LG_MIN = 1280;
export const SCREEN_XL_MIN = 1920;

export const SCREEN_XXS_MAX = SCREEN_XS_MIN - 1;
export const SCREEN_XS_MAX = SCREEN_SM_MIN - 1;
export const SCREEN_SM_MAX = SCREEN_MD_MIN - 1;
export const SCREEN_MD_MAX = SCREEN_LG_MIN - 1;
export const SCREEN_LG_MAX = SCREEN_XL_MIN - 1;

export const SCREEN_XS = 'screen and (max-width: 599px)';
export const SCREEN_SM = 'screen and (min-width: 600px) and (max-width: 959px)';
export const SCREEN_MD = 'screen and (min-width: 960px) and (max-width: 1279px)';
export const SCREEN_LG = 'screen and (min-width: 1280px) and (max-width: 1919px)';
export const SCREEN_XL = 'screen and (min-width: 1920px) and (max-width: 5000px)';
export const SCREEN_LT_SM = 'screen and (max-width: 599px)';
export const SCREEN_LT_MD = 'screen and (max-width: 959px)';
export const SCREEN_LT_LG = 'screen and (max-width: 1279px)';
export const SCREEN_LT_XL = 'screen and (max-width: 1919px)';
export const SCREEN_GT_XS = 'screen and (min-width: 600px)';
export const SCREEN_GT_SM = 'screen and (min-width: 960px)';
export const SCREEN_GT_MD = 'screen and (min-width: 1280px)';
export const SCREEN_GT_LG = 'screen and (min-width: 1920px)';

export type BreakpointsMin =
  | typeof SCREEN_XS_MIN
  | typeof SCREEN_SM_MIN
  | typeof SCREEN_MD_MIN
  | typeof SCREEN_LG_MIN
  | typeof SCREEN_XL_MIN;

export const SCREEN_DESKTOP_LG = 'screen and (min-width: 1920px)';
export const SCREEN_DESKTOP_MD = 'screen and (min-width: 1280px) and (max-width: 1919px)';
export const SCREEN_DESKTOP_GT_SM = 'screen and (min-width: 1280px)';
export const SCREEN_DESKTOP_SM = 'screen and (min-width: 840px) and (max-width: 1279px)';
export const SCREEN_DESKTOP = 'screen and (min-width: 840px)';
export const SCREEN_LT_TABLET = 'screen and (max-width: 839px)';
export const SCREEN_TABLET = 'screen and (min-width: 600px) and (max-width: 839px)';
export const SCREEN_PHONE = 'screen and (max-width: 599px)';

export const VIEWPORT_SIZES = [
  SCREEN_DESKTOP_LG,
  SCREEN_DESKTOP_MD,
  SCREEN_DESKTOP_GT_SM,
  SCREEN_DESKTOP_SM,
  SCREEN_DESKTOP,
  SCREEN_LT_TABLET,
  SCREEN_TABLET,
  SCREEN_PHONE
];

export interface ScreenMatch {
  tablet: boolean;
  phone: boolean;
  desktop: boolean;
  desktopSm: boolean;
  desktopGtSm: boolean;
  desktopMd: boolean;
  desktopLg: boolean;
}
