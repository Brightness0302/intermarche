import React, {useState} from "react";

import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';

interface IPiechart {
    categories?: Array<string>
    series?: ApexAxisChartSeries | ApexNonAxisChartSeries,
    gradientFromColor?: string
    gradientToColor?: string
}

const Piechart: React.FC<IPiechart> = ({categories, series = [], gradientFromColor, gradientToColor}) => {
    const [ Dataoptions, setOptions ] = useState<ApexOptions>({
        chart: {
            width: 380,
            type: 'pie',
        },
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
              colors: ['#fff']
            },
            formatter: function (val, opt) {
                return opt.w.globals.labels[opt.seriesIndex]
            },
            offsetX: 0,
            dropShadow: {
                enabled: true
            }
        },
        legend: {
            show: false
        },
        labels: categories,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    })

    const [ Dataseries, setSeries] = useState<ApexOptions['series']>(series);

    return (
        <>
            <ReactApexChart
                options={Dataoptions}
                series={Dataseries}
                type={"pie"}
                width={"100%"}
            />
        </>
    );
}

export default Piechart;
