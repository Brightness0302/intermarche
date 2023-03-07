import React from 'react'
import { Link } from "react-router-dom"
import { Table } from 'antd'
import { TableProps } from 'antd/es/table'

import InputField from '../InputField'
import SearchField from '../SearchField'
import Navbar from '../Layout/Navbar'
import IconField from '../IconField'
import SelectField from '../SelectField'
import StatusField from '../StatusField'
import Stackchart from '../Chart/Stackchart'
import Piechart from '../Chart/Piechart'
import Columnchart from '../Chart/Columnchart'

const Dashboard: React.FC = () => {
    return (
        <div className='min-h-screen flex justify-start'>
            <Navbar />
            <div className='bg-white p-8' style={{width:'100%'}}>
                <div className='flex justify-between py-2'>
                    <div className='flex jusity-start items-center'>
                        <IconField src='faChartPie' width={16} height={14} />
                        <label className='text-lg'>Demandes</label>
                    </div>
                </div>
                <div className='py-2'>
                    <div className='flex items-center'>
                        <button className='text-xs border border-gray p-2 flex justify-center'><IconField src='faCalendarDay' width={16} height={16} /><div className='flex items-center mt-[2px]'>Dernier 7 jours</div></button>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 py-2'>
                    <div className='flex justify-start items-center text-lg text-[#7982FF]'><IconField src='faPeopleGroup' width={16} height={14} /><label>Familles</label></div>
                    <div className='flex justify-start items-center text-lg text-[#FF9092]'><IconField src='faTag' width={16} height={14} /><label>Budget Serré</label></div>
                </div>
                <div className='grid grid-cols-2 gap-4 py-2'>
                    <div className='flex flex-col'>
                        <div className='-colflex flex-col p-2 bg-[#8c84ff19]'>
                            <div className='py-2'>
                                <p className='text-sm'>Volume traité</p>
                            </div>
                            <div className='grid grid-cols-2 py-2'>
                                <div>
                                    <p className='text-sm'>Nombre de dossiers</p>
                                    <p className='text-[#7582FF] text-2xl font-bold'>2612</p>
                                </div>
                            </div>
                            <div>
                                <Columnchart categories={["01/09", "02/09", "03/09", "04/09", "05/09", "06/09", "07/09"]} series={[40, 88, 60, 79, 70, 93, 8]} gradientFromColor="#9585FF" gradientToColor="#5C80FF" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='-colflex flex-col p-2 bg-[#ff966c10]'>
                            <div className='py-2'>
                                <p className='text-sm'>Volume traité</p>
                            </div>
                            <div className='grid grid-cols-2 py-2'>
                                <div>
                                    <p className='text-sm'>Nombre de dossiers</p>
                                    <p className='text-[#7582FF] text-2xl font-bold'>1878</p>
                                </div>
                            </div>
                            <div>
                                <Columnchart categories={["01/09", "02/09", "03/09", "04/09", "05/09", "06/09", "07/09"]} series={[40, 88, 60, 79, 70, 93, 8]} gradientFromColor="#ff9a60" gradientToColor="#ff89bb" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 py-2'>
                    <div className='flex flex-col'>
                        <div className='-colflex flex-col p-2 bg-[#8c84ff19]'>
                            <div className='py-2'>
                                <p className='text-sm'>Délais de traitement</p>
                            </div>
                            <div className='grid grid-cols-2 py-2'>
                                <div>
                                    <p className='text-sm'>Temps moyen de traitement</p>
                                    <p className='text-[#7582FF] text-2xl font-bold'>1,3 j</p>
                                </div>
                                <div>
                                    <p className='text-sm'>% inferieur à 5j</p>
                                    <p className='text-[#7582FF] text-2xl font-bold'>95,7%</p>
                                </div>
                            </div>
                            <div>
                                <Columnchart categories={["01/09", "02/09", "03/09", "04/09", "05/09", "06/09", "07/09"]} series={[40, 88, 60, 79, 70, 93, 8]} gradientFromColor="#9585FF" gradientToColor="#5C80FF" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='-colflex flex-col p-2 bg-[#ff966c10]'>
                            <div className='py-2'>
                                <p className='text-sm'>Volume traité</p>
                            </div>
                            <div className='grid grid-cols-2 py-2'>
                                <div>
                                    <p className='text-sm'>Temps moyen de traitement</p>
                                    <p className='text-[#7582FF] text-2xl font-bold'>1,3 j</p>
                                </div>
                                <div>
                                    <p className='text-sm'>% inferieur à 5j</p>
                                    <p className='text-[#7582FF] text-2xl font-bold'>95,7%</p>
                                </div>
                            </div>
                            <div>
                                <Columnchart categories={["01/09", "02/09", "03/09", "04/09", "05/09", "06/09", "07/09"]} series={[40, 88, 60, 79, 70, 93, 8]} gradientFromColor="#ff9a60" gradientToColor="#ff89bb" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 py-2'>
                    <div className='flex flex-col'>
                        <div className='-colflex flex-col p-2 bg-[#8c84ff19]'>
                            <div className='py-2'>
                                <p className='text-sm'>Consommation</p>
                            </div>
                            <div className='grid grid-cols-2 py-2'>
                                <div>
                                    <p className='text-sm'>Dossiers restants</p>
                                    <p className='text-[#7582FF] text-2xl font-bold'>365</p>
                                </div>
                            </div>
                            <div>
                                <Piechart categories={['Restants', 'Consommé', 'Mois en cours']} series={[140, 120, 100]} gradientFromColor="#9585FF" gradientToColor="#5C80FF" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='-colflex flex-col p-2 bg-[#ff966c10]'>
                            <div className='py-2'>
                                <p className='text-sm'>Erreurs</p>
                            </div>
                            <div className='grid grid-cols-2 py-2'>
                                <div>
                                    <p className='text-sm'>% de KO</p>
                                    <p className='text-[#7582FF] text-2xl font-bold'>13 %</p>
                                </div>
                            </div>
                            <div>
                                <Stackchart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
