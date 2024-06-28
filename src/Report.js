import React from 'react'
import useStore from './store'

const Report = () => {
    const { topic, independentVariable, dependentVariable, method, data, dataCollection, subject, consideration, setConsideration } = useStore();

    const handleConsiderationChange = (event) => {
        setConsideration(event.target.value);
    };

    return (
        <div>
            <div className='mb-4 text-xl font-bold py-4 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]'>
            {topic !== "" ? <p className='text-center'> {topic}</p> : <p className='text-gray-400 text-center'>연구 주제를 입력해주세요</p> }
            </div>
            <div className='grid grid-cols-2 gap-2 mb-4'>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]'>
                    <p className='font-bold text-lg'>독립변인</p>
                    {independentVariable}
                </div>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]'>
                    <p className='font-bold text-lg'>종속변인</p>
                    {dependentVariable} 
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 mb-4'>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100  transition-all duration-200 hover:scale-[1.02]'>
                    <p className='font-bold text-lg'>연구대상</p>
                    {subject}
                </div>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]'>
                    <p className='font-bold text-lg'>연구방법</p>
                    {method} 
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 mb-4'>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]'>
                    <p className='font-bold text-lg'>데이터</p>
                    {data}
                </div>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]'>
                    <p className='font-bold text-lg'>데이터 수집</p>
                    {dataCollection} 
                </div>
            </div>
            <div className='flex flex-col mb-4 border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]'>
                <p className='font-bold text-lg my-2'>고려사항</p>
                <textarea
                    className='w-full border p-2 rounded-xl'
                    value={consideration}
                    onChange={handleConsiderationChange}
                    placeholder='연구를 진행하면서 고려해야 할 사항을 입력하세요.'
                    rows={4}
                />
            </div>
        </div>
    )
}

export default Report