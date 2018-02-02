import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleList from '../components/ArticleList';
import { fetchArticleList } from '../ducks/articleList';
import withLoading from '../hocs/withLoading';

const ArticleListWithLoading = withLoading(ArticleList); // Loading Indicator가 추가된 PC생성

class ArticleListContainer extends Component {
  // [무한루프해결] PC의 데이터로딩 code -> CC로 이동
  static defaultProps = {
    onMount: () => {},
  }
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    const { onMount, ...rest } = this.props;
    return (
      <ArticleListWithLoading {...rest} />
    );
  }
}

export default connect(
  // mapStateToProps
  state => ({
    articles: state.articleList.articles,
    loading: state.articleList.loading,
  }),
  // mapDispatchToProps
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(ArticleListContainer);
