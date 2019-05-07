import React,{Component} from 'react'

import './Form.css'


class Form extends Component {

    state = {
        title : "",
        globalTitle :"",
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    } 

    componentDidMount= () =>{
        console.log('Formulaire Rendu');
        
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const contact = `Mon formulaire - <${this.state.title}>`
        // console.log(contact)
        // console.log(this.state.globalTitle)
        this.setState({globalTitle: contact})
    }

     componentDidUpdate(prevProps, prevState) {
    //    console.log("prevProps", prevProps)
    //     console.log("prevState", prevState)
        if (this.state.globalTitle !== prevState.globalTitle) {
        console.log("Titre changé")
        }
     }

    render(){
        // console.log(this.state.title);
        
        return(
            <div className="form-container">

               <form onSubmit={this.handleSubmit}>
                   <div className="form-data">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" onChange={this.handleChange} />
                </div>

                <div className="form-data">
                    <input type="submit" value="Envoyer"/>
                </div>
               </form>
                
            </div>
        )
    }
}

export default Form 