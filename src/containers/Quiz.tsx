'use client';
import React from 'react';
import { quizSection } from '@/lib/content/quiz';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    response: string;
};

interface FormData {
    response: string;
}

const Quiz = () => {
    const { title, quiz } = quizSection;
    const { register, handleSubmit, formState: {errors} } = useForm<Inputs, FormData>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data.response);
    };

    return (
        <div className='bg-slate-800 min-h-screen'>
            <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <img className="mx-auto h-10 w-auto" src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt="Company" />
                    <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>{ title }</h2>
                </div>
                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    {quiz.map((item) => (
                        <form key={item.question} onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-10'>
                                <h2 className='font-bold text-xl text-indigo-400'>{item.question}</h2>
                                <select {...register('response')} name="response" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2 ml-5'>

                                {item.options.map((option, idx) => (
                                    <option key={idx} value={option}>{option}</option>
                                ))}
                                </select>
                                
                                <button className='text-white mt-2 ml-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Enviar</button>
                            </div> 
                        </form>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quiz;