import useStore from './store';
import variables_guide from './variables_guide.png'
import { useState } from 'react';

const Variables = () => {
    const { menu, topic, independentVariable, setIndependentVariable, addIndependentVariable ,dependentVariable, setDependentVariable, addDependentVariable, independentVariableExamples, dependentVariableExamples } = useStore();    
    
    const [isModalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
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
        <div className='flex justify-between items-center'>
            <p className='font-bold text-lg my-2'>변인 설정</p>
            <span 
            style={{borderColor : menu[2].color, color: menu[2].textColor}} 
            className='text-sm p-1 px-2 border rounded-full cursor-pointer'
            onClick={handleModalOpen}> 가이드 </span>
        </div>
        <div className='rounded-xl text-[#468080] p-4' style={{backgroundColor: 'rgba(129, 203, 203, 0.1)', lineHeight: 2}}>
        <span className='px-2 py-1 rounded-full bg-orange-100 text-orange-600 shadow-md'>독립변인</span>은 연구자가 실험에서 조작하거나 변화시키는 요소이며, 
        <span className='px-2 py-1 rounded-full bg-lime-100 text-lime-600 shadow-md'>종속변인</span>은 이 변화로 인해 영향을 받는 결과입니다. 
        <span className='px-2 py-1 rounded-full bg-orange-100 text-orange-600 shadow-md'>독립변인</span>을 설정할 때는 연구 질문에 맞는 명확한 변화를 선택하고, <span className='px-2 py-1 rounded-full bg-lime-100 text-lime-600 shadow-md'>종속변인</span>은 그 변화의 효과를 측정할 수 있는 구체적인 지표를 선정하세요.
        </div>
        <div className='flex flex-col md:flex-row gap-4 my-4'>
            <div className='w-full md:w-1/2 p-2 px-4 rounded-xl bg-orange-100'>
                <p className='text-center font-bold text-orange-700 my-2'>독립변인</p>
                <input type="text"
                    className='w-full rounded-full border p-2'
                    placeholder='독립변인을 입력하세요'
                    value={independentVariable}
                    onChange={(e) => setIndependentVariable(e.target.value)}
                />
                <p className="my-2 text-center opacity-60 text-xs">아래 예시를 선택할 때마다 추가됩니다.</p>
                <div>
                    {
                        independentVariableExamples.map((example, index) => {
                            return (
                                <div key={index} 
                                    className='w-full text-center text-sm p-1 m-2 rounded-xl cursor-pointer opacity-30 hover:opacity-100 mx-auto'
                                    style={{
                                        background: 'rgba(255, 165, 0, 0.2)',
                                        borderRadius: '16px',
                                        backdropFilter: 'blur(5px)',
                                        WebkitBackdropFilter: 'blur(5px)',
                                        border: '1px solid rgba(255, 165, 0, 0.3)',
                                    }}
                                    onClick={() => addIndependentVariable(example)}>
                                    {example}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full md:w-1/2 p-2 px-4 rounded-xl bg-lime-100'>
            <p className='text-center font-bold text-lime-700 my-2'>종속변인</p>
                <input type="text"
                    className='w-full rounded-full border p-2'
                    placeholder='종속변인을 입력하세요'
                    value={dependentVariable}
                    onChange={(e) => setDependentVariable(e.target.value)}
                />
                <p className="my-2 text-center opacity-60 text-xs">아래 예시를 선택할 때마다 추가됩니다.</p>
                <div>
                    {
                        dependentVariableExamples.map((example, index) => {
                            return (
                                <div key={index} 
                                    className='w-full text-center text-sm p-1 m-2 rounded-xl cursor-pointer opacity-30 hover:opacity-100 mx-auto'
                                    style={{
                                        background: 'rgba(50, 205, 50, 0.2)',
                                        borderRadius: '16px',
                                        backdropFilter: 'blur(5px)',
                                        WebkitBackdropFilter: 'blur(5px)',
                                        border: '1px solid rgba(50, 205, 50, 0.3)',
                                    }}
                                    onClick={() => addDependentVariable(example)}>
                                    {example}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

        {isModalOpen && (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleModalClose}
        >
        <div 
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside the modal content
        >
            <img src={variables_guide} alt="Example" />
            <button 
                className="absolute top-2 right-2 text-gray-600"
                onClick={handleModalClose}
            >
            ✕
            </button>
            </div>
        </div>
        )}

        </div>
    );

}

export default Variables;