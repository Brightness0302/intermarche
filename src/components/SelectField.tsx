import React from 'react';

type OptionType = {
    value: string
    label: string
}
interface SelectFieldProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>{
    id: string
    options: OptionType[]
}

const SelectField: React.FC<SelectFieldProps> = ({id, options, ...rest}) => {
    return (
        <div className=''>
            <div className='mt-1'>
                <select
                    id={id}
                    className="block w-full border bg-white p-2 rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:text-white dark:bg-[#E354B1]"
                    {...rest}
                >
                    {options.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
                </select>
            </div>
        </div>
    );
};

export default SelectField;