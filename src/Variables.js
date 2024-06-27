import useStore from './store';

const Variables = () => {
    const { topic, independentVariable, setIndependentVariable, dependentVariable, setDependentVariable, independentVariableExamples, dependentVariableExamples } = useStore();
    return (
        <div>
        <div className='flex flex-col mb-4'>
            <label className='font-bold text-lg my-2'>내가 정한 주제</label>
            <input type="text" 
                className='w-full rounded-full border p-2' 
                value={topic} 
                disabled
                />
        </div>
        <hr className='my-4'/>
        <p className='font-bold text-lg my-2'>변인 설정</p>
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
                                    onClick={() => setIndependentVariable(example)}>
                                    {example}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full md:w-1/2 p-2 rounded-xl bg-lime-100'>
            <p className='text-center font-bold text-lime-700 my-2'>종속변인</p>
                <input type="text"
                    className='w-full rounded-full border p-2'
                    placeholder='종속변인을 입력하세요'
                    value={dependentVariable}
                    onChange={(e) => setDependentVariable(e.target.value)}
                />
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
                                    onClick={() => setDependentVariable(example)}>
                                    {example}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </div>
    );

}

export default Variables;