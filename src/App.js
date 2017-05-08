import React from 'react';

//styles
import './App.css';

//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

//Componants
import DansApp from './DansApp';
import EmptyApp from './EmptyApp';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Tab A" value="a">
          <div>
            <h2>Controllable Tab A</h2>
              <DansApp />
          </div>
        </Tab>
        <Tab label="Tab B" value="b">
          <div>
            <h2>Controllable Tab B</h2>
            <EmptyApp />
          </div>
        </Tab>
      </Tabs>
      </MuiThemeProvider>
    );
  }
}

export default App
