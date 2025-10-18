import { useEffect, useState } from 'react';
import CartoonApi from './services/CartoonApi';
import './App.css'

const App = () => {
    const [listaDesenhos, setListaDesenhos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await CartoonApi.getItems();
            console.log("Dados recebidos:", data);
            setListaDesenhos(data);
        } catch (error) {
            console.error("Erro ao buscar os desenhos:", error);
        }
        };

        fetchData();
    }, []);
    
    return (
        <div className="container">
            <div className="capa-container">
                <img src='./img/capa.jpg' className='capa' />
            </div>
            <h1 classname='titulo'>Desenhos do Cartoon Network</h1>
            <div className="card-container">
                {listaDesenhos.map((item, index) => (
                    <div key={item.id || index} className="cartoon-card">
                        <img src={item.image} alt={item.title} width={200} />
                        <h2>{item.title} ({item.year})</h2>
                        <p><strong>Criador:</strong> {item.creator.join(', ')}</p>
                        <p><strong>Gêneros:</strong> {item.genre.join(', ')}</p>
                        <p><strong>Duração:</strong> {item.runtime_in_minutes} min</p>
                        <p><strong>Episódios:</strong> {item.episodes}</p>
                        <p><strong>Classificação:</strong> {item.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;
