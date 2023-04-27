import styles from './Home.module.css';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export function Home(){

    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState('');


    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/')
        .then(({data}) => {
            setPeople(data);
        })
    }, [])


    function handleDelete(id){

        axios.post(`http://localhost:3000/delete/${id}`)
        .then((res) => {
            console.log(res);
        });

        navigate(0);
    }

    const filtered = search.length > 0 ? 
        people.filter(people => people.name.includes(search)) 
        : 
        [];

    return (
        <div>
            <form action="/" method='GET'>

                <h2>Registros</h2>

                <div className={styles.formControl}>
                    <input 
                        type="text" 
                        name="search" 
                        placeholder="Digite o nome da pessoa..."
                        onChange={event => setSearch(event.target.value)}
                    />
                </div>

            </form>

            {people.length > 0 && 

                <table className={styles.tableRegisters}>
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Ocupação</th>
                            <th>Ações</th>
                        </tr>
                        
                        {search.length > 0 ?
                            filtered.map((people) => {
                                return (
                                        
                                        <tr key={people.id}>
                                            <td>{people.name}</td>
                                            <td>{people.tel}</td>
                                            <td>{people.occupation}</td>
                                            <td className={styles.actions}>
                                                <button>
                                                    <Link to={'/edit/' + people.id}><i className="bi bi-pen"></i></Link>
                                                </button>

                                                <button onClick={() => handleDelete(people.id)}>
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </td>
                                        </tr>
                                )
                            })
                            :
                            people.map((people) => {
                                return (
                                        
                                        <tr key={people.id}>
                                            <td>{people.name}</td>
                                            <td>{people.tel}</td>
                                            <td>{people.occupation}</td>
                                            <td className={styles.actions}>
                                                <button>
                                                    <Link to={'/edit/' + people.id}><i className="bi bi-pen"></i></Link>
                                                </button>

                                                <button onClick={() => handleDelete(people.id)}>
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </td>
                                        </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }

            {people.length === 0 && <h3 className={styles.emptyAPI}>Nenhum registro foi encontrado, <Link to="/register">crie um aqui</Link>.</h3>}
        </div>
    );
};