import Chart from 'react-apexcharts';
const DonutChart = () => {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
        /* o '...options' pega as config da variavel do options e reaproveita ele no chart, e tambem podendo incluir mais coisas nessa parte...  */
       <Chart 
            options={{...options,labels:mockData.labels}} // xaxis pega o labels do mockdata, colocando então as informações contidas nele.
            series={mockData.series}  
            type="donut" 
            height="240"
       />
    );
}

export default DonutChart;