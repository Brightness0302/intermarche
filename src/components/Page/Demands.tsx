import React from 'react';
import { Link } from "react-router-dom";
import { Table } from 'antd';
import { TableProps } from 'antd/es/table';

import InputField from '../InputField';
import SearchField from '../SearchField';
import Navbar from '../Layout/Navbar';
import IconField from '../IconField';
import SelectField from '../SelectField';
import StatusField from '../StatusField';

const Demands: React.FC = () => {
    return (
        <div className='min-h-screen flex justify-start'>
            <Navbar />
            <div className='bg-white p-8' style={{width:'100%'}}>
                <div className='flex justify-start items-center py-2'>
                    <IconField src='faArrowLeft' width={12} height={12} />
                    <label className='text-sm'>Toutes les demandes</label>
                </div>
                <div className='flex justify-between py-2'>
                    <div className='flex jusity-start items-center'>
                        <IconField src='faFolder' width={16} height={14} />
                        <label className='text-lg'>Demandes</label>
                    </div>
                    <div className='flex items-center'>
                        <button className='text-xs border border-gray p-2'>Télecharger le JSON</button>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-4'>
                    <SearchField parentClass="col-span-3" id='Rechercher' placeholder='Rechercher' />
                    <SelectField id='Statut de la demande' options={[
                        {
                            value: '1',
                            label: 'Statut de la demande',
                        },
                    ]} />
                    <SelectField id='Etat de la demande' options={[
                        {
                            value: '1',
                            label: 'Etat de la demande',
                        },
                    ]} />
                    <SelectField id='Communauté' options={[
                        {
                            value: '1',
                            label: 'Communauté',
                        },
                    ]} />
                </div>
                <div className='p-2 mt-4'>
                    <table className='w-full text-xs'>
                        <thead className='text-[#A6B0C5] text-left'>
                            <tr>
                                <th>Identifiant</th>
                                <th>Adhesion</th>
                                <th>Communauté</th>
                                <th>Type</th>
                                <th className='text-center'>Retour</th>
                                <th>Etat</th>
                                <th>Date de création</th>
                                <th>Date de fin</th>
                                <th>Durée</th>
                                <th className='text-right'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>890</td>
                                <td>187882</td>
                                <td>Familles</td>
                                <td>INSC</td>
                                <td></td>
                                <td><StatusField type='success' /></td>
                                <td>28/06/2022</td>
                                <td>28/06/2022</td>
                                <td>14.03:37:05</td>
                                <td className='flex justify-end'><button className='border border-gray p-2'>Voir</button></td>
                            </tr>
                            <tr>
                                <td>890</td>
                                <td>187882</td>
                                <td>Familles</td>
                                <td>INSC</td>
                                <td></td>
                                <td><StatusField type='success' /></td>
                                <td>28/06/2022</td>
                                <td>28/06/2022</td>
                                <td>14.03:37:05</td>
                                <td className='flex justify-end'><button className='border border-gray p-2'>Voir</button></td>
                            </tr>
                            <tr>
                                <td>890</td>
                                <td>187882</td>
                                <td>Familles</td>
                                <td>INSC</td>
                                <td></td>
                                <td><StatusField type='success' /></td>
                                <td>28/06/2022</td>
                                <td>28/06/2022</td>
                                <td>14.03:37:05</td>
                                <td className='flex justify-end'><button className='border border-gray p-2'>Voir</button></td>
                            </tr>
                            <tr>
                                <td>890</td>
                                <td>187882</td>
                                <td>Familles</td>
                                <td>INSC</td>
                                <td></td>
                                <td><StatusField type='success' /></td>
                                <td>28/06/2022</td>
                                <td>28/06/2022</td>
                                <td>14.03:37:05</td>
                                <td className='flex justify-end'><button className='border border-gray p-2'>Voir</button></td>
                            </tr>
                            <tr>
                                <td>890</td>
                                <td>187882</td>
                                <td>Familles</td>
                                <td>INSC</td>
                                <td></td>
                                <td><StatusField type='success' /></td>
                                <td>28/06/2022</td>
                                <td>28/06/2022</td>
                                <td>14.03:37:05</td>
                                <td className='flex justify-end'><button className='border border-gray p-2'>Voir</button></td>
                            </tr>
                            <tr>
                                <td>890</td>
                                <td>187882</td>
                                <td>Familles</td>
                                <td>INSC</td>
                                <td></td>
                                <td><StatusField type='success' /></td>
                                <td>28/06/2022</td>
                                <td>28/06/2022</td>
                                <td>14.03:37:05</td>
                                <td className='flex justify-end'><button className='border border-gray p-2'>Voir</button></td>
                            </tr>
                            <tr>
                                <td>890</td>
                                <td>187882</td>
                                <td>Familles</td>
                                <td>INSC</td>
                                <td></td>
                                <td><StatusField type='success' /></td>
                                <td>28/06/2022</td>
                                <td>28/06/2022</td>
                                <td>14.03:37:05</td>
                                <td className='flex justify-end'><button className='border border-gray p-2'>Voir</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Demands;
