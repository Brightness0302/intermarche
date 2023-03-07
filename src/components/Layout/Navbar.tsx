import React from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import NavbarItemField from '../NavbarItemField';

import InputField from '../InputField';


const Edit: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleItemClick = (linkaddress: string) => {
        const link = '/'+linkaddress;
        navigate(link);
    }

    return (
        <div className='w-52 p-4'>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center'>
                    <img src='/image/logo.png' alt='' />
                </div>
                <div className='mt-6'>
                    <NavbarItemField id='dashboard' src='faChartPie' label='Dashboard' onClick={() => handleItemClick('dashboard')} active={(location.pathname==='/dashboard')?true:false} />
                    <NavbarItemField id='demands' src='faFolder' label='Demandes' onClick={() => handleItemClick('demands')} active={(location.pathname==='/demands')?true:false} />
                    <NavbarItemField id='profile' src='faCircleUser' label='Utilisateurs' onClick={() => handleItemClick('profile')} active={(location.pathname==='/profile')?true:false} />
                </div>
                <div className='my-6'>
                    <p className='text-[#A6B0C5] text-xs text-center'>Se deconnecter</p>
                </div>
                <div className=''></div>
            </div>
            <div className='fixed bottom-6'>
                <div className='px-12 py-6'>
                    <img src='/mark/POWERED BY.png' alt='' />
                    <img src='/mark/Logo Wirk Desk.png' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Edit;
