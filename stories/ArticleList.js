import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ArticleList from '../src/components/ArticleList';

const articles = [
  {
    id: 'article01',
    title: '게시글 제목',
    createdAt: 1517453801003,
    nickName: 'Bong',
  },
  {
    id: 'article02',
    title: '게시글 제목2',
    createdAt: 1517453801003,
    nickName: 'Bong',
  },
  {
    id: 'article03',
    title: '게시글 제목3',
    createdAt: 1517453801003,
    nickName: 'Bong',
  },
];

const articlesWithLink = articles.map(article => ({
  ...article,
  itemProps: {
    as: 'a',
    href: 'https://google.com',
    target: '_blank',
  },
}))

storiesOf('ArticleList', module)
  .add('default', () => (
    <ArticleList articles={articles}/>
  ))
  .add('links', () => (
    <ArticleList articles={articlesWithLink}/>
  ));
