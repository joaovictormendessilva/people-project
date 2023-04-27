import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Edit.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Edit(){

    const { id } = useParams();

    const [peopleData, setPeopleData] = useState([]);
    const [address, setAddress] = useState([])

    const navigate = useNavigate();

    

    useEffect(() => {
        axios.get(`http://localhost:3000/edit/${id}`)
        .then(({data}) => {
            setPeopleData(data);
            setAddress(data.Addresses);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    function inputChangeValues(event){
        setPeopleData((prevValues) => ({
            ...prevValues,
            [event.target.name] : event.target.value
        }));
    };

    function inputChangeValuesAddress(event){
        setAddress((prevValue) => ({
            ...prevValue,
            [event.target.name] : event.target.value
        }));
    };

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/edit/update', {
            id: peopleData.id,
            name: peopleData.name,
            email: peopleData.email,
            tel: peopleData.tel,
            age: peopleData.age,
            occupation: peopleData.occupation,
            road: address.road,
            number: address.number,
            city: address.city,
        })
        
        navigate('/');
    }



    return(
        <div className={styles.container}>
            <form className={styles.formEdit} onSubmit={handleSubmit}>
                <h2>Editar Registro</h2>

                <input 
                    type="hidden" 
                    name='id' 
                    value={peopleData.id || ''} 
                    onChange={inputChangeValues}
                    
                />

                <div className={styles.formControl}>
                    <input type="text" 
                        name='name' 
                        placeholder='Nome' 
                        value={peopleData.name || ''} 
                        onChange={inputChangeValues}
                    />
                    <i className="bi bi-person"></i>
                </div>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='email' 
                        placeholder='Email' 
                        value={peopleData.email || ''} 
                        onChange={inputChangeValues}
                    />
                    <i className="bi bi-envelope-at"></i>
                </div>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='tel' 
                        placeholder='Telefone' 
                        value={peopleData.tel || ''} 
                        onChange={inputChangeValues}
                    />
                    <i className="bi bi-telephone"></i>
                </div>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='age' 
                        placeholder='Idade' 
                        value={peopleData.age || ''} 
                        onChange={inputChangeValues}
                    />
                    <i className="bi bi-person"></i>
                </div>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='occupation' 
                        placeholder='Ocupação' 
                        value={peopleData.occupation || ''} 
                        onChange={inputChangeValues}
                    />
                    <i className="bi bi-person-workspace"></i>
                </div>

                <h2>Endereço</h2>

                <input 
                    type="hidden"
                    name='addressId'
                    value={address.id || ''}
                    onChange={inputChangeValuesAddress}
                />

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='road' 
                        placeholder='Rua'
                        value={address.road || ''}
                        onChange={inputChangeValuesAddress}
                    />
                    <i className="bi bi-geo-alt"></i>
                </div>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='number' 
                        placeholder='Número da casa'
                        value={address.number || ''}
                        onChange={inputChangeValuesAddress}
                    />
                    <i className="bi bi-geo-alt"></i>
                </div>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name='city' 
                        placeholder='Cidade'
                        value={address.city || ''}
                        onChange={inputChangeValuesAddress}
                    />
                    <i className="bi bi-geo-alt"></i>
                </div>

                <div className={styles.formButton}>
                    <button>Salvar</button>
                </div>
            </form>
        </div>
    );
};