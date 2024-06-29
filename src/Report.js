import React, {useRef} from 'react'
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

import useStore from './store'

const Report = () => {
    const { menu, topic, independentVariable, dependentVariable, method, data, dataCollection, subject, consideration, setConsideration } = useStore();
    const reportRef = useRef(null);

    const handleConsiderationChange = (event) => {
        setConsideration(event.target.value);
    };

    const downloadImage = () => {
        if (reportRef.current === null) {
          return;
        }
    
        toPng(reportRef.current, { cacheBust: true })
          .then((dataUrl) => {
            saveAs(dataUrl, 'report.png');
          })
          .catch((err) => {
            console.error('Oops, something went wrong!', err);
          });
      };

    return (
        <div>
        <div className='bg-white p-2' ref={reportRef}>
            <div className='mb-4 text-xl font-bold py-4 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 '>
            {topic !== "" ? <p className='text-center'> {topic}</p> : <p className='text-gray-400 text-center'>연구 주제를 입력해주세요</p> }
            </div>
            <div className='grid grid-cols-2 gap-2 mb-4'>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1'>
                    <p className='font-bold text-lg'>독립변인</p>
                    {independentVariable}
                </div>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1'>
                    <p className='font-bold text-lg'>종속변인</p>
                    {dependentVariable} 
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 mb-4'>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100  transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1'>
                    <p className='font-bold text-lg'>연구대상</p>
                    {subject}
                </div>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1'>
                    <p className='font-bold text-lg'>연구방법</p>
                    {method} 
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 mb-4'>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1'>
                    <p className='font-bold text-lg'>데이터</p>
                    {data}
                </div>
                <div className='border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1'>
                    <p className='font-bold text-lg'>데이터 수집</p>
                    {dataCollection} 
                </div>
            </div>
            <div className='flex flex-col mb-4 border p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1'>
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
        <div className='flex justify-end'>
            <button
                onClick={downloadImage}
                style={{backgroundColor: menu[5].color}}
                className='mt-4 text-white p-2 rounded-xl hover:brightness-110 transition-all duration-200 hover:scale-[1.02]'
            >
                이미지로 저장
            </button>
        </div>
        </div>
    )
}

export default Report