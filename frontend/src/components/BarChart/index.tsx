import Chart from 'react-apexcharts';

const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };
    return (
        /* o '...options' pega as config da variavel do options e reaproveita ele no chart, e tambem podendo incluir mais coisas nessa parte...  */
       <Chart 
            options={{...options,xaxis:mockData.labels}} // xaxis pega o labels do mockdata, colocando então as informações contidas nele.
            series={mockData.series}  
            type="bar" 
            height="240"
       />
    );
}

export default BarChart;