import React from "react";
import "./collection.component";

import collectionItemComponent from "../../components/collection-item/collectionItem.component";

const Collection = ({ match }) => {
  console.log(match);
  return (
    <div className="collection">
      <h2>Catgory page</h2>
    </div>
  );
};

export default Collection;
