import React, { useEffect, useState } from 'react'

const FormularioCadastro = (props)  => {
const camposIniciaisDeValores = {

     nome: '',
     dataNascimento: '',
     idade: '',
     sexo: '',
     telefone: '',
     email: '',
}

let { values, setValues} = useState(camposIniciaisDeValores)



const manipuladorInputChange = e => {
    let{name,value} = e.target

    setValues({
        ...values,
        [name]: value
    })

}
 const manipuladorFormEnvio = e => {
     e.preventDefault()
     props.addEedit(values)
 }
    return (
        <form autoComplete ="off" onSubmit={manipuladorFormEnvio}>
            <div className="form-group input-group">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                
                <input className="form-control" placeholder= "nome Completo" name="nomeCompleto" value={values.nomeCompleto} 
                onChange={manipuladorInputChange} />
            </div>
            <div className="row">
            <div className="form-group input-group col-md-6">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                </div>
                
                <input className="form-control" placeholder= "nome Completo" name="telefone" value={values.telefone} 
                onChange={manipuladorInputChange}/>
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>


                <input className="form-control" placeholder= "nome Completo" name="email" value={values.email}
                onChange={manipuladorInputChange} />
                 </div>
             </div>

             <div className="form-group">
                 <textarea className="form-control" placeholder="endereco" name="endereco" value={values.endereco}
                  type="submit" value="Salvar" className="btn btn-primary btn-block"/>
             </div>
    

      </form>
    )

}
    
    

export default FormularioCadastro