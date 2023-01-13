export const enum RouteEnum {
  HOME = '/',
  FLAT = '/flat',
  FLATS = '/flats',
  HELP = '/help',
  STATES = '/states',
  LOG_IN_USER = '/log-in-user',
  SIGN_UP_USER = '/sign-up-user',
  ANY = '*',
  USER_CABINET = '/user/cabinet',
  UNDER_WORK = '/under_work',
}

export type RouteEnumType = Record<RouteEnum, string>;
