import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";

import { selectCollectionUrl } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collectionItem.component";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionUrl(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
