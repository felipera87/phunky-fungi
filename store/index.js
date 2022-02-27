export const state = () => ({
  windowInnerWidth: 0,
})

export const getters = {
  isMobileView: (state) => {
    // 640 is the width value of sm class on tailwind
    return state.windowInnerWidth < 640
  },
}

export const mutations = {
  update(state, width) {
    state.windowInnerWidth = width
  },
}
