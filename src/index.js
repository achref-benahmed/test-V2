import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Content from './components/item-list';
import Header from './components/header';


class App extends Component {

                      render (){
                        return (

                          <div>
                          <Header />
                          <Content />
                          </div>

                        );
                      }

                    }



ReactDOM.render(
  <App />
  , document.querySelector('.container'));
