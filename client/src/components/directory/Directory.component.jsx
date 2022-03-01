import { connect } from "react-redux";
import "./directory.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/Menu-item.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {/* sectionProps= title, imageUrl, size,linkUrl */}
    {sections.map(({ id, ...otherSectionProps }) => (
      // sectionProps = title={title} imageUrl={imageUrl} size={size}
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

// const mapStateToProps = (state) => ({ sections: state.directory.sections });

export default connect(mapStateToProps)(Directory);
