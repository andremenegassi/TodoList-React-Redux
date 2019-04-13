import React, { Component } from 'react';
import TodoTable from './components/TodoTable';
import {connect} from 'react-redux';


class App extends Component {
  
  constructor(){

    super();

    this.state = {
      valor: ""
    }
  }

  adicionar(){
  
    this.props.dispatch({
      type:"ADICIONAR",
      payload: this.state.valor
    });

    this.setState({
      valor: ""
    });
  
    this.refs.inputValor.focus();
  
  }
 

  render() {
    
    let html = 
    <div>
      <h1 style={{color:"red", textAlign:"center"}}>TodoList React + REDUX</h1>
        <input type="text" 
               ref="inputValor" 
               style={{width:"100%", padding: "10px", boxSizing:"border-box", marginBottom: "10px" }}
               value={this.state.valor}
               placeholder="digite aqui"
               onChange={evt => this.setState({valor:evt.target.value}) } />
        
        <input type="button" 
               style={{width:"100%", padding: "10px", 
                       backgroundColor: "#507ae8", color: "white", border: 0, 
                       borderRadius: 4}} 
               value="adicionar" onClick={this.adicionar.bind(this)} />
        <div>
          {this.props.localState.dados.length}
        </div>
        <TodoTable />
    </div>
    

    return (html);
  }
  
}

const mapStoreGlobalToProps = (stateGlobal) => {
  return {localState:stateGlobal}
}

export default connect(mapStoreGlobalToProps)(App);
