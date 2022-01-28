import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';




export function MyGraph(props){
 
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      
      const options = {
        responsive: true,
        plugins: {
          
          title:{
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      
      const labels = ['.', '.', '.','.', '.', '.','.', '.', '.','.', '.', '.','.'];
    
     const data = {
        labels,
        datasets: [
         
          {
            label: 'Dataset 2',
            data: labels.map((item,index) => props.graphdata[index]),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
      
if(props.graphdata){
  return <Line  options={options} data={data} />;
}
else{
  return <div>Sorry</div>;
}

}

