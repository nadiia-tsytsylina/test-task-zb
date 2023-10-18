export const selectDeals = (state) => state.deals.items;
export const selectIsDealsLoading = (state) => state.deals.isLoading;
export const selectDealsError = (state) => state.deals.error;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRegistred = (state) => state.auth.isRegistred;
export const selectIsPasswordReseted = (state) => state.auth.isPasswordReseted;
export const selectUserName = (state) => state.auth.user.name;
export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectIsFetchingUser = (state) => state.auth.isFetchingUser;