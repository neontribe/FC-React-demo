// Where should we check our log instate. When combined these two properties
// should point to the who am i route, careful of missing or double slashes
const BACKCONTROLLER_BASE="https://account.ncvo.org.uk"
const WHO_AM_I_PATH="/api/auth/whoami"

// BELOW HERE SHOULD NOT NEED TO CHANGE
export const WHO_AM_I_ROUTE = BACKCONTROLLER_BASE + WHO_AM_I_PATH

export const LOGIN_STATE_LOADING="loading"
export const LOGIN_STATE_LOGGED_IN="logged_in"
export const LOGIN_STATE_LOGGED_OUT="logged_out"
export const LOGIN_STATE_ERRORED="login_errored"
