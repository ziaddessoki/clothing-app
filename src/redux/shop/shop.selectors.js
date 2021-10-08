// using reselect package for example with cartIcon numbers so the mapStateToProps in comp,
// wont be called each time the any of irrelative state values gets updated, so the component don't have to re-render

import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);
