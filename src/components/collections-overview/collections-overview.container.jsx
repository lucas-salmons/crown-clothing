import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOveriew from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOveriewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOveriew);

export default CollectionsOveriewContainer;
