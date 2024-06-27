import React from 'react'
import useStore from './store'

const Method = () => {
    const properties = useStore(state => state.properties);
    const selectProperty = useStore(state => state.selectProperty);
    const selectedProperties = useStore(state => state.selectedProperties || []);
    const method = useStore(state => state.method);
    const setMethod = useStore(state => state.setMethod);
  
    const handleClick = (item) => {
        selectProperty(item);
    };


    return (
        <div>

        <p className='font-bold text-lg my-2'>연구 주제에 맞는 요소를 선택해볼까요?</p>
        <div className='grid grid-cols-5 gap-2'>
            
            {
                properties.map((property, index) => {
                    return (
                        <div>
                            <div key={index} 
                                className='w-full bg-gray-400 text-center p-2 m-2 rounded-xl cursor-pointer mx-auto'
                                >
                                {property.title}
                            </div>
                            {property.items.map((item, subIndex) => (
                                <div
                                    key={`${index}-${subIndex}`}
                                    className={`w-full border text-center p-2 m-2 rounded-xl cursor-pointer mx-auto 
                                                ${selectedProperties.includes(item) && subIndex === 0  ? 'bg-red-200 border-red-300' : ' text-black'}
                                                ${selectedProperties.includes(item) && subIndex === 1  ? 'bg-blue-200 border-blue-300' : ' text-black'}
                                                `}
                                    onClick={() => handleClick(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    )
                })
            }

        </div>
        <hr className='my-4'/>
        <div className='grid grid-cols-2 mb-4'><p className='font-bold text-lg my-2'>설명을 읽고 연구 방법을 선택해볼까요?</p><div>
            <input type="text" 
                className='w-full rounded-full border p-2' 
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                placeholder='연구 방법을 입력하세요!'
                />
            </div>
        </div> 
        <div className='grid grid-cols-3 gap-2'>
            <div className='p-2 bg-red-200 rounded-xl text-center cursor-pointer'>양적 연구</div>
            <div className='p-2 bg-blue-200 rounded-xl text-center cursor-pointer'>질적 연구</div>
            <div className='p-2 bg-violet-200 rounded-xl text-center cursor-pointer'>혼합 연구</div>
        </div>

        </div>
    )
} 

export default Method