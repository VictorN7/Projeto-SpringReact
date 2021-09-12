//import './components/DataTable/style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../components/DataTable/style.css';
import { SalePage } from '../../types/sale';
import { formatLocalDate } from '../../utils/format';
import { BASE_URL } from '../../utils/requests';
import Pagination from '../Pagination';
const DataTable = () => {

    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=10&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            })
    }, [activePage]); // O segundo argumento monitora a mudança de estado da variavel

    //Função que recebe um indice e atribui para o estado activePage
    const changePage = (index :number ) =>{
        setActivePage(index);
    }

    return (
        <>
        {/* page do pagination={page de DataTable} */}
            <Pagination page={page} onPageChange={changePage} />
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead className="table-config">
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody className="table-config">
                        {page.content?.map(item => (
                            <tr key={item.id}> {/* key é necessario para cada item da coleção ter um id unico - particularidade do react para gerenciar a coleção */}
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;