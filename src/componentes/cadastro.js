import React,{useState,useEffect} from 'react'
import FormularioCadastro from './formularioCadastro'
import fireDb from '../firebase'


const Cadastro = ()  => {
    let[dadosagendasdeaulas, setDadosagendadeaulas ] = use({})

let [idAtual, setIdAtual] = userState('')

 useEffect(()=> {
 fireDb.child('agendadeaulas').on('value',dbPhoto => {
   if(dbPhoto.val() != null){
       setDadosagendadeaulas({
           ...db.dbPhoto.val()
        })
      }
   })
 },[])


    const addEedit = obj => {
        if(error)
        console.log(erro)
        fireDb.child('agendadeaulas').push(

            
         )

    }
    return (
        <div>
          <div className="jumbotron jumbotron-fluid">
               <div className="container">
                    <h1 className="display-4">Agenda de aulas de Informática</h1>
                    
       </div>
   </div>

   <div className="row">
       <div className="col-md-5">
            <FormularioCadastro addEedit={addEedit}/>
            </div>
            <div> 
                <div className="col-md-7"/>
                    <table className="table table-boderless table-stripped">
                        <thead className="theade-ligh">
                            <tr>
                                <td>Nome Completo</td>
                                <td>Data de Nascimento </td>
                                <td>Idade</td>
                                <td>Sexo</td>
                                <td>Telefone</td>
                                <td>E-mail</td>    
                         </tr>
                </thead>

                    <tbody>
                        {
                        object.keys(dadosagendasdeaulas).map(id => {  
                            return <tr key={id}>
                                <td>{dadosagendasdeaulas[id].nomeCompleto}</td>
                                <td>{dadosagendasdeaulas[id].dataNascimento}</td>
                                <td>{dadosagendasdeaulas[id].idade}</td>
                                <td>{dadosagendasdeaulas[id].sexo}</td>
                                <td>{dadosagendasdeaulas[id].telefone}</td>
                                <td>{dadosagendasdeaulas[id].email}</td>
                                <td>
                                   <a className="btn btn-primary" onClick={ () => {setIdAtual(id)}}>
                                       <i className="fas fa-pencil-alt"></i>
                                    </a>

                                     <a className="bt  btn-danger">
                                         <i className="far fa-trash-alt"></i>

                                     </a>
                                </td>
                            </tr>
                      })
                    }  
                    </tbody>
                </table> 
            </div>   
        </div>
    </div>
    
    )

}

export default Cadastro