import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../Assets/images/icons/warning.svg'


import './styles.css'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm(){
    return(
        <div id="page-teacher-form" className= "container">
            <PageHeader 
                title= "Que Incrível Que Você Quer Dar Aulas" 
                description= "O Primeiro Passo é Preencher o Formulário de Inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a Aula</legend>
                    
                    <Select 
                        name="subject" 
                        label="Materia"
                        options= {[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Ciências', label: 'Ciências'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'Português', label: 'Português'},
                            { value: 'Física', label: 'Física'},
                            { value: 'História', label: 'História'},
                            { value: 'Geografia', label: 'Geografia'},
                            { value: 'Química', label: 'Química'},
                            { value: 'Educação Física', label: 'Educação Física'},
                            { value: 'Filosofia', label: 'Filosofia'},
                        ]} 
                    />
                    <Input name="cost" label="Custo da Sua Hora por Aula" />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br />
                        Preencha Todos os Dados
                    </p>
                    <button className="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;