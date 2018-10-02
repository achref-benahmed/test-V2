import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Content from './components/item-list';


class App extends Component {

                      render (){
                        return (

                          <div>
                          <Content />
                          </div>

                        );
                      }

                    }



ReactDOM.render(
  <App />
  , document.querySelector('.container'));
