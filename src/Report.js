import React from 'react'
import useStore from './store'

const Report = () => {
    const { topic, independentVariable, dependentVariable, method, data, dataCollection, consideration } = useStore();
    return (
        <div>
            <div className='mb-4 text-xl font-bold'>
                <p className='text-center'>{topic}</p>
            </div>
            <div className='grid grid-cols-2 gap-2 mb-4'>
                <div className='border p-2 rounded-xl'>
                    <p className='font-bold text-lg'>독립변인</p>
                    {independentVariable}
                </div>
                <div className='border p-2 rounded-xl'>
                    <p className='font-bold text-lg'>종속변인</p>
                    {dependentVariable} 
                </div>
            </div>
            <div className='flex flex-col mb-4'>
            </div>
            <div className='flex flex-col mb-4'>
                <p className='font-bold text-lg my-2'>연구방법</p>
                {method} 
            </div>
            <div className='grid grid-cols-2 gap-2 mb-4'>
                <div className='border p-2 rounded-xl'>
                    <p className='font-bold text-lg'>데이터</p>
                    {data}
                </div>
                <div className='border p-2 rounded-xl'>
                    <p className='font-bold text-lg'>데이터 수집</p>
                    {dataCollection} 
                </div>
            </div>
            <div className='flex flex-col mb-4'>
                <p className='font-bold text-lg my-2'>고려사항</p>
                {consideration} 
                </div>
        </div>
    )
}

export default Report