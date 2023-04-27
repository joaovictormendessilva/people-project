import { useState } from 'react';
import styles from './Register.module.css';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export function Register(){

    const [ changeValues, setChangeValues ] = useState();

    const navigate = useNavigate();

    function changeInputValues(event){
        setChangeValues((prevValue) => ({
            ...prevValue,
            [event.target.name] : event.target.value
        }));
    };

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/create', {
            name: changeValues.name,
            email: changeValues.email,
            tel: changeValues.tel,
            age: changeValues.age,
            occupation: changeValues.occupation
        })
        .then(() => {
            navigate('/');
        })

    }

    return(
        <div className={styles.container}>
            <form className={styles.formRegister} onSubmit={handleSubmit}>
                <h2>Cadastrar</h2>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Nome'
                        onChange={changeInputValues}
                        required
                    />
                    <i className="bi bi-person"></i>
                </div>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='email' 
                        placeholder='Email'
                        onChange={changeInputValues}
                        required
                    />
                    <i className="bi bi-envelope-at"></i>
                </div>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='tel' 
                        placeholder='Telefone'
                        onChange={changeInputValues}
                        required
                    />
                    <i className="bi bi-telephone"></i>
                </div>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='age' 
                        placeholder='Idade'
                        onChange={changeInputValues}
                        required
                    />
                    <i className="bi bi-person"></i>
                </div>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='occupation' 
                        placeholder='Ocupação'
                        onChange={changeInputValues}
                        required
                    />
                    <i className="bi bi-person-workspace"></i>
                </div>

                <div className={styles.formButton}>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
};