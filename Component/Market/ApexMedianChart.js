// import Chart from 'react-apexcharts'
import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class ApexMedianChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: 'Rental Growth',
                    data: [25, 20, 22, 20, 28, 15, 18],
                    color: '#E027A0'
                },
                {
                    name: 'Market Appreciation',
                    data: [35, 30, 35, 30, 35, 20, 10],
                    color: '#0F74AF'
                }],
            options: {
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false,
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    fontSize:'16'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                yaxis: {
                    show: true,
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    }
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    }
                },
            },
        };
    }
    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        );
    }
}

export default ApexMedianChart