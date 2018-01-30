import React, {Component} from 'react';
import {
  Button,
  Icon,
  Grid,
  Segment,
  Header
} from 'semantic-ui-react';
import styled from 'styled-components';

const FullHeightGrid = styled(Grid)`
  height: 100vh;
`;

export default class LoginScreen extends Component {
  render() {
    return (
      <FullHeightGrid  centered verticalAlign="middle">
        <Grid.Column style={{ width: '280px'}} textAlign='center'>
          <Segment stacked loading style={{ padding: '50px', borderRadius: '30px'}}>
            <Header as='h1'>Login</Header>
            <Button color='google plus' fluid>
              <Icon name='google plus' /> Google Plus
            </Button>
            <Button color='twitter' fluid style={{marginTop: '10px'}}>
              <Icon name='twitter' /> Twitter
            </Button>
          </Segment>
        </Grid.Column>
      </FullHeightGrid>
    );
  }
}
