import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from '../../types/sale';
import { BASE_URL } from '../../utils/requests';


type CharData = {
    labels:string[];
    series:number[];

}

const DonutChart = () => {

    // Forma errada
    let chartData :  CharData = { labels:[], series:[]};

    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const data = response.data as SaleSum[]; // Casting da List de Collection da api para o SaleSum do react 
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            chartData = { labels:myLabels, series: mySeries};

            console.log(chartData);
        })
    /* const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    } */

    const options = {
        legend: {
            show: true
        }
    }
    return (
        /* o '...options' pega as config da variavel do options e reaproveita ele no chart, e tambem podendo incluir mais coisas nessa parte...  */
        <Chart
            options={{ ...options, labels: chartData.labels }} // xaxis pega o labels do mockdata, colocando então as informações contidas nele.
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;