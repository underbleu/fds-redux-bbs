import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

export default class TopMenu extends Component {
  static defaultProps = {
    logoProps: {},
    accountProps: {}
  }

  render () {
    const {logoProps, accountProps} = this.props;
    return (
      <Menu>
        <Menu.Item {...logoProps} name='browse'>
          게시판
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item {...accountProps} name='signup'>
            계정
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
