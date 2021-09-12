import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SaleSuccess } from '../../types/sale';
import { BASE_URL } from '../../utils/requests';
import { round } from '../../utils/format';

type SeriesData = {
    name :string;
    data: number[];
}
type ChartData = {
    labels: {
        categories : string[];

    };
    series : SeriesData[];
}

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []                   
            }
        ]
    });

    useEffect(() => { 
        axios.get(`${BASE_URL}/sales/success-by-seller`)
        .then(response => {
            const data = response.data as SaleSuccess[]; // Casting da List de Collection da api para o SaleSum do react 
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));

            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% de Sucesso",
                        data: mySeries                    
                    }
                ]
            });
        })
    },[])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    /* const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    }; */
    return (
        /* o '...options' pega as config da variavel do options e reaproveita ele no chart, e tambem podendo incluir mais coisas nessa parte...  */
       <Chart 
            options={{...options,xaxis:chartData.labels}} // xaxis pega o labels do mockdata, colocando então as informações contidas nele.
            series={chartData.series}  
            type="bar" 
            height="240"
       />
    );
}

export default BarChart;