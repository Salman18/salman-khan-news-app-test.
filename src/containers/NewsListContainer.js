import { connect } from "react-redux";
import { getData } from "../actions/news.action";
import NewsList from "../components/NewsList/NewsList.js";

const mapStateToProps = state => {
  return {
    data: state.news.data,
    loading: state.news.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getData())
  };
};

const NewsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
export default NewsListContainer;
