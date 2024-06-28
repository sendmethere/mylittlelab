import React from 'react'
import useStore from './store'

const Method = () => {
    const selectedProperties = useStore(state => state.selectedProperties || []);

    const { properties, selectProperty, method, subject, setSubject, setMethod, topic, independentVariable, dependentVariable } = useStore();
  
    const handleClick = (item) => {
        selectProperty(item);
    };


    return (
        <div>
            <div className='flex flex-col mb-4'>
                <label className='font-bold text-lg my-2'>내가 정한 주제</label>
                <input type="text" 
                    className='w-full rounded-full border p-2 bg-gray-200' 
                    value={topic} 
                    disabled
                    />
            </div>
            <hr className='my-4'/>
            <label className='font-bold text-lg my-1'>변인</label>
            <div className='flex mb-4'>
                <div className='w-1/2'>
                    <div className="flex items-center gap-2 my-2">
                    <span>독립변인</span>
                    <input type="text" 
                        className='w-[80%] rounded-full border p-2 bg-gray-200' 
                        value={independentVariable} 
                        disabled
                    />
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className="flex items-center gap-2 my-2">
                        <span>종속변인</span>
                        <input type="text" 
                        className='w-[80%] rounded-full border p-2 bg-gray-200' 
                        value={dependentVariable} 
                        disabled
                        />
                    </div>
                </div>
            </div>
            <hr className='my-4'/>
            <p className='font-bold text-lg my-2'>연구의 대상은 누구(무엇)인가요?</p>
            <input type="text" 
                className='w-full rounded-full border p-2' 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder='연구 대상을 입력하세요!'
                />
            <hr className='my-4'/>
            <p className='font-bold text-lg my-2'>하고자 하는 연구의 속성은 어떤가요?</p>
            <div className='grid grid-cols-5 gap-2'>
                {
                properties.map((property, index) => {
                    return (
                        <div>
                            <div key={index} 
                                className='w-full bg-gray-600 text-white text-center p-2 m-2 rounded-xl cursor-pointer mx-auto'
                                >
                                {property.title}
                            </div>
                            {property.items.map((item, subIndex) => (
                                <div
                                    key={`${index}-${subIndex}`}
                                    className={`w-full border text-center p-2 m-2 rounded-xl cursor-pointer mx-auto opacity-70 hover:opacity-100 hover:bg-gray-100
                                                ${selectedProperties.includes(item) && subIndex === 0  ? 'bg-red-200 border-red-300 hover:bg-red-200' : ' text-black'}
                                                ${selectedProperties.includes(item) && subIndex === 1  ? 'bg-blue-200 border-blue-300 hover:bg-blue-200' : ' text-black'}
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
        <div className='grid grid-cols-2 mb-2'><p className='font-bold text-lg my-2'>설명을 읽고 연구 방법을 선택해볼까요?</p><div>
            <input type="text" 
                className='w-full rounded-full border p-2' 
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                placeholder='연구 방법을 입력하세요!'
                />
            </div>
        </div> 
        <p className='text-right text-xs mb-4'>연구 방법을 더 구체적으로 정해도  좋아요!</p>
        <div className='grid grid-cols-3 gap-2'>
            <div className=' opacity-50 hover:opacity-100 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1'  onClick={()=>{setMethod('양적 연구')}}>
                <div className='p-2 bg-red-200 rounded-tl-xl rounded-tr-xl text-center cursor-pointer'>양적 연구</div>
                <div className='p-2 indent-2 rounded-bl-xl rounded-br-xl bg-gray-100'>
                    <p>양적연구는 수치 데이터를 수집하고 분석하여 객관적이고 일반화 가능한 결론을 도출하는 연구 방법입니다.</p>
                    <p>양적 연구의 종류로는 설문 조사, 실험 연구, 종단 연구, 횡단 연구 등의 방법이 있습니다.</p> 
                </div>
            </div>
            <div className=' opacity-50 hover:opacity-100 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1' onClick={()=>{setMethod('질적 연구')}}>
                <div className='p-2 bg-blue-200 rounded-tl-xl rounded-tr-xl text-center'>질적 연구</div>
                <div className='p-2 indent-2 rounded-bl-xl rounded-br-xl bg-gray-100'>
                    <p>질적연구는 연구 대상자의 경험, 생각, 감정, 그리고 사회적 맥락을 깊이 이해하기 위해 비수치적 데이터를 수집하고 분석하는 연구 방법입니다.</p>
                    <p>질적 연구의 종류로는 심층 인터뷰, 참여 관찰, 문헌 분석 등의 방법이 있습니다.</p> 
                </div>
            </div>
            <div className=' opacity-50 hover:opacity-100 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1' onClick={()=>{setMethod('혼합 연구')}}>
                <div className='p-2 bg-violet-200 rounded-tl-xl rounded-tr-xl text-center'>혼합 연구</div>
                <div className='p-2 indent-2 rounded-bl-xl rounded-br-xl bg-gray-100'>
                        <p>혼합 연구는 양적 연구와 질적 연구를 결합하여 사용하는 연구 방법으로 양적 연구의 객관적 데이터와 질적 연구의 심층적 이해를 결합시킬 수 있습니다.</p>
                        <p>혼합 연구의 종류로는 동시적 혼합 방법, 순차적 혼합 방법, 내장형 혼합 방법 등이 있습니다.</p> 
                </div>
            </div>
        </div>

        </div>
    )
} 

export default Method