import React, {useState} from "react";

import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';

interface IColumnchart {
    categories?: Array<string>
    series?: 
        | (number | null)[]
        | {
            x: any;
            y: any;
            fill?: ApexFill;
            fillColor?: string;
            strokeColor?: string;
            meta?: any;
            goals?: any;
            barHeightOffset?: number;
            columnWidthOffset?: number;
        }[]
        | [number, number | null][]
        | [number, (number | null)[]][]
        | number[][],
    gradientFromColor?: string
    gradientToColor?: string
}

const Columnchart: React.FC<IColumnchart> = ({categories, series = [], gradientFromColor, gradientToColor}) => {
    const [ Dataoptions, setOptions ] = useState<ApexOptions>({
        chart: {
            height: 350,
            type: 'bar',
            zoom: {
                enabled: true
            }
        },
        annotations: {
            points: []
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                {
                    offset: 0,
                    color: gradientFromColor,
                    opacity: 1
                },
                {
                    offset: 100,
                    color: gradientToColor,
                    opacity: 1
                }
              ]
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '50%', 
                borderRadius: 5,
                dataLabels: {
                    position: "top" // top, center, bottom
                }
            }
        },
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#304758"]
            }
        },
        markers: {
            size: 0
        },
        xaxis: {
            categories: categories
        },
        yaxis: [
            {
                axisTicks: { show: true },
                axisBorder: { show: true },
                labels: {
                show: true,
                },
                tooltip: { enabled: false },
            }
        ],
        legend: {
            show: true
        },
    })

    const [ Dataseries, setSeries] = useState<ApexOptions['series']>(
        [
            {
                data: series,
                type: "bar"
            }
        ]
    );

    return (
        <>
            <ReactApexChart
                options={Dataoptions}
                series={Dataseries}
                type={"bar"}
                width={"100%"}
            />
        </>
    );
}

export default Columnchart;
