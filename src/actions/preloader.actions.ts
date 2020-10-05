
export const ACTION_TYPES = {
  START_PRELOADER: "START_PRELOADER",
  STOP_PRELOADER: "STOP_PRELOADER"
}

export const startPreloader = () => {
  return {
    type: ACTION_TYPES.START_PRELOADER
  }
}

export const stopPreloader = () => {
  return {
    type: ACTION_TYPES.STOP_PRELOADER
  }
}