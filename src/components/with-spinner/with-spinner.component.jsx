import React from "react";
import "./with-spinner.styles.scss";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinnerOverlay">
        <div className="spinnerContainer"></div>
        <h2>Loading...</h2>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default WithSpinner;
