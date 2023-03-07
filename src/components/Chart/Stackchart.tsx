import React, {useState} from "react";

import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';

interface IStackchart {
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
}

const Stackchart: React.FC<IStackchart> = (categories, series) => {
    const [ Dataoptions, setOptions ] = useState<ApexOptions>({
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 5,
                dataLabels: {
                    total: {
                    enabled: true,
                    offsetX: 0,
                    style: {
                        fontSize: '13px',
                        fontWeight: 900
                    }
                    }
                }
            },
        },
        stroke: {
            width: 2,
            colors: ['#fff']
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: [1200, 1011, 1001],
        },
        yaxis: {
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        }
    })

    const [ Dataseries, setSeries] = useState<ApexOptions['series']>(
        [
            {
                name: 'Initiale',
                data: [44, 55, 41]
            }, {
                name: 'Rejeux',
                data: [53, 32, 33]
            }, {
                name: 'Prolongations',
                data: [12, 17, 11]
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

export default Stackchart;
