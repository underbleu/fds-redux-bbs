import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export default class ArticleList extends Component {
  // [무한루프해결] PC의 데이터로딩 code -> CC로 이동
  // static defaultProps = {
  //   articles: [],
  //   onMount: () => {},
  // }
  // componentDidMount() {
  //   this.props.onMount();
  // }

  render() {
    const { articles } = this.props;
    return (
      <List divided relaxed>
        {
          articles.map(({
            id, title, createdAt, nickName, itemProps = {},
          }) => (
            <List.Item key={id} {...itemProps} >
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header>{title} ({nickName})</List.Header>
                <List.Description>{createdAt}</List.Description>
              </List.Content>
            </List.Item>
          ))
        }
      </List>
    );
  }
}
