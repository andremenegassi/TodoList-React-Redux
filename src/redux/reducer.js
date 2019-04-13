const stateGlobal ={
    dados: []
}

export default function(state = stateGlobal, action){

    switch (action.type){

        case "ADICIONAR":

            state.dados.push(action.payload);
            return {...state, dados: state.dados  }

        case "EXCLUIR":

            let i = state.dados.findIndex(item =>{
                return item == action.payload
            });
            
            state.dados.splice(i,1);
            return {...state, dados:state.dados}

        default: return state;
    }

}