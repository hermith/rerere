import * as React from 'react';
import { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import { lightGreenA200 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const drawerStyleOverride = {
  top: 'inherit',
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: lightGreenA200,
  },
});

interface MainProps {
  children?: any;
}

export class Main extends Component<MainProps, undefined> {
  public render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="rerere" iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <section style={{marginLeft: open ? 256 : 0}}>
            <Drawer open containerStyle={drawerStyleOverride}>
              <MenuItem>I am first</MenuItem>
              <MenuItem>I am second</MenuItem>
            </Drawer>
            <main>
              {children}
            </main>
          </section>
        </div>
      </MuiThemeProvider>
    );
  }
}
