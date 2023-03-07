import React from 'react';

interface InputFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    id: string
    label: string
    errorMessage?: string
    touched?: boolean
}

const InputField: React.FC<InputFieldProps> = ({ errorMessage, id, label, touched = false, ...rest }) => {
    return (
        <div className=''>
            <label
                htmlFor={id}
                className='block text-sm font-medium text-gray-700 dark:text-white'
            >
                {label} 
                {errorMessage && touched && (
                    <label className="mt-2 text-sm text-red-600 dark:text-red-500">
                        ({errorMessage})
                    </label>
                )}
            </label>
            <div className='mt-1'>
                <input
                    id={id}
                    className='block w-72 rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2 font-serif dark:text-white dark:bg-[#E354B1]'
                    {...rest}
                />
            </div>
        </div>
    );
};

export default InputField;