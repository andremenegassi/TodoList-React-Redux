import React from 'react'
import {connect} from 'react-redux';

class TodoTable extends React.Component
{

    excluir(item) {

        this.props.dispatch({
            type: "EXCLUIR",
            payload: item
        });

    }


    render(){

        let html =    
        <table style={{border:"1px solid gray", width:"100%", marginTop: 10}}>
        <tbody>
            {
                this.props.localState.dados.map(item =>{

                    return (
                        <tr>
                            <td>{item}</td>
                            <td><a onClick={this.excluir.bind(this, item)}>excluir</a></td>
                        </tr>);

                })
            
            }            
        </tbody>
        </table>

        return html;
    }

}

const mapStateGlobalToProps = (state) =>{
    return {localState: state}
}

export default connect(mapStateGlobalToProps)(TodoTable);