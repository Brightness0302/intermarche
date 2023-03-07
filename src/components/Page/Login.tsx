import React from 'react';
import { Link } from "react-router-dom";
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import InputField from '../InputField';
import { ILoginSchema } from '../../types';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('Required'),
});

const initialValues: ILoginSchema = {
    email: '',
    password: '',
}

const Login: React.FC = () => {
    const onSubmit = (values: ILoginSchema) => {

    }

    return (
        <div className=''>
            <div className='min-h-screen flex justify-center items-center'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={LoginSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={onSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                    }) => (
                        <Form className=''>
                            <div className=''>
                                <div className='p-10 flex justify-center'>
                                    <img src='/image/logo1.png' alt='' />
                                </div>
                                <div className='p-10 bg-white rounded-2xl'>
                                    <div className=''>
                                        <div className='flex justify-center'>
                                            <p className='text-2xl color-[##535066] font-semibold'>Se connecter</p>
                                        </div>
                                        <div className='mt-6'>
                                            <div className='p-2'>
                                                <InputField
                                                    label='Email*'
                                                    touched={touched.email}
                                                    errorMessage={errors.email}
                                                    type='text'
                                                    name='email'
                                                    id='email'
                                                    autoComplete='given-name'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                />
                                            </div>
                                            <div className='p-2'>
                                                <InputField
                                                    label='Mot de passe*'
                                                    touched={touched.password}
                                                    errorMessage={errors.password}
                                                    type='text'
                                                    name='password'
                                                    id='password'
                                                    autoComplete='family-name'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex p-2'>
                                        <button
                                            type='submit'
                                            className='w-full rounded border border-transparent bg-[#535066] py-2 px-4 text-sm font-medium text-white dark:text-[#e279bd] shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                        >
                                            Se connecter
                                        </button>
                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='text-[#535066] text-xs'>Vous n'avez pas encore de compte ? </div>
                                        <div className='text-[#A6B0C5] text-xs'><Link to={"/register"}>Inscription</Link></div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
