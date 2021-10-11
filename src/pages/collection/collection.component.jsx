import React from "react";
import "./collection.component";
import { connect } from "react-redux";

import collectionItemComponent from "../../components/collection-item/collectionItem.component";

import { selectCollectionUrl } from "../../redux/shop/shop.selectors";

const Collection = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection">
      <h2>Catgory page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionUrl(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
