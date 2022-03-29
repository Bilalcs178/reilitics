import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class EmploymentSectorsGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Number of jobs (in thousands) in OCTOBER",
                data: this.props.sector,
                color: '#022945',
            }],
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    },
                    type: 'bar',
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                        barHeight: '110',
                    }
                },
                grid: {
                    show: false,
                },
                stroke: {
                    width: 3,
                    lineCap: 'round',
                    colors: ["#fff"]
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: 'top',
                    horizontalAlign: 'right',
                    fontSize: '16'
                },
                dataLabels: {
                    enabled: false,
                },
                yaxis: {
                    show: true,
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '8px',
                        },
                        rotate: 330,
                    },
                },
                xaxis: {
                    show: true,
                    categories: this.props.sectorDate,
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                        rotate: 330,
                    },
                }
            },


        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.sector !== prevProps.sector) {

            var b = {
                ...this.state.options,
                xaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.sectorDate
                }
            }
            var c = [{
                name: "Number of Jobs",
                data: this.props.sector,
                color: '#0F74AF'
            }
            ]
            this.setState({
                series: c,
                options: b
            })

        }
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={550} />
            </div>


        );
    }
}

export default EmploymentSectorsGraph