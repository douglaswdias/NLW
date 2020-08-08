import React from 'react';

import whatsappIcon from '../../Assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/54633359?s=460&u=4a33fba451e7f846471681cc48e44e70ed3301ff&v=4" alt="Douglas Dias"/>
                        <div>
                            <strong>Douglas Dias</strong>
                            <span>Matemática</span>
                        </div>
                    </header>

                    <p>
                        Na vida não existe uma forma correta, ou a melhor, sempre haverá formas diferentes de se fazer a mesma coisa!
                        <br/><br/>
                        3+1 = 4<br/>
                        2+2 = 4<br/>
                        15*7 - 1 = 4<br/>
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type= "button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entre em Contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem