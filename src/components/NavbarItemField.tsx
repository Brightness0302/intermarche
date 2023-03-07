import React from 'react';
import Icon from './IconField';

interface LinkFieldProps extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    id?: string
    src?: string
    label?: string
    active?: boolean
}

const NavbarItemField: React.FC<LinkFieldProps> = ({ id, src, label, active, ...rest }) => {
    return (
        <div className='cursor-pointer'>
            <div className='my-2'>
                <li
                    id={id}
                    className={`block w-full rounded  focus:border-indigo-500 focus:ring-indigo-500 text-sm p-1 font-serif dark:text-white dark:bg-[#E354B1] flex justify-start items-center `+((active===true)?'bg-white':'bg-gray')}
                    {...rest}
                >
                    <Icon src={src} width={16} height={16} active={active} />
                    {label}
                </li>
            </div>
        </div>
    );
};

export default NavbarItemField;