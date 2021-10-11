// using reselect package for example with cartIcon numbers so the mapStateToProps in comp,
// wont be called each time the any of irrelative state values gets updated, so the component don't have to re-render

import { createSelector } from "reselect";
import memoize from "lodash.memoize";
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionUrl = memoize((collectionUrlParam) =>
  createSelector([selectCollection], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
