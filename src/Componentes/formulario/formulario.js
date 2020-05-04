import React from 'react'

//importação da estilização da pagina
import './style.css'




//função que retorna o formulário
function Formulario(){
    return (
        <div>
        <hr/>
            <section class='contact'>
                <div class='contato'>
                    <h2 class='titulo'>Contato</h2>

                    <form name="contact" action='POST'method="POST" data-netlify="true" class='form'>
                        <input type="text" name="name" id='name' placeholder="Nome" class='field'/>               
                        <input type="email" name="email"  id='email'placeholder='E-mail' class='field'/>              
                        <textarea  name="message" id='message'placeholder='Digite sua mensagem aqui...' class='text'/>              
                        <button type="submit" name='botao'  class='botao'>Enviar</button>           
                    </form>
                    
                </div>      
                <div>
                <form name="contact" method="POST"action='POST' data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

                </div>
            </section>
        </div>   
    )
}

//exportação da função componente que retorna o formulário
export default Formulario;