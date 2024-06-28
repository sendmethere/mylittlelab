import useStore from "./store"; 

const Data = () => {
    const { topic, independentVariable, dependentVariable, method, data, setData, addData, dataCollection, setDataCollection, subject, dataExamples, dataCollectionExamples } = useStore();

    const handleClick = (item) => {
        addData(item);
      };
    
      const handleInputChange = (event) => {
        setData(event.target.value);
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
            <div className='flex-col mb-4'>
                <label className='font-bold text-lg my-1'>변인</label>
                <div className="flex">
                    <div className="flex w-1/2 items-center gap-2 my-2">
                        <span>독립변인</span>
                        <input type="text" 
                            className='w-[80%] rounded-full border p-2 bg-gray-200' 
                            value={independentVariable} 
                            disabled
                        />
                    </div>
                    <div className="flex w-1/2 items-center gap-2 my-2">
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
            <div className='flex w-full gap-4'>
                <div className="w-1/2">
                    <label className='font-bold text-lg my-1'>연구대상</label>
                    <div className="flex items-center gap-2 my-2">
                        <input type="text" 
                            className='w-full rounded-full border p-2 bg-gray-200' 
                            value={subject} 
                            disabled
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <label className='font-bold text-lg my-1'>연구방법</label>
                    <div className="flex items-center gap-2 my-2">
                        <input type="text" 
                            className='w-full rounded-full border p-2 bg-gray-200' 
                            value={method} 
                            disabled
                        />
                    </div>
                </div>
            </div>
            <hr className='my-4'/>
            <p className='font-bold text-lg my-2'>수집할 데이터</p>
            <div className='flex flex-col md:flex-row gap-4 my-4'>
            <div className='w-full md:w-1/2 p-2 px-4 rounded-xl bg-violet-100'>
                <p className='text-center font-bold text-violet-600 my-2'>수집할 데이터</p>
                <input type="text"
                    className='w-full rounded-full border p-2'
                    placeholder='수집할 데이터를 입력하세요'
                    value={data}
                    onChange={handleInputChange}
                />
                <p className="my-2 text-center opacity-60 text-xs">아래 예시를 선택할 때마다 추가됩니다.</p>
                <div className="grid grid-cols-2 gap-2">
                    {
                        dataExamples.map((example, index) => {
                            return (
                                <div key={index} 
                                    className='w-full text-center text-sm p-1 m-2 rounded-xl cursor-pointer opacity-30 hover:opacity-100 mx-auto'
                                    style={{
                                        background: 'rgba(124, 58, 247, 0.2)',
                                        borderRadius: '16px',
                                        backdropFilter: 'blur(5px)',
                                        WebkitBackdropFilter: 'blur(5px)',
                                        border: '1px solid rgba(124, 58, 247, 0.3)',
                                    }}
                                    onClick={() => handleClick(example)}>
                                    {example}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full md:w-1/2 p-2 px-4  rounded-xl bg-fuchsia-100'>
            <p className='text-center font-bold text-fuchsia-600 my-2'>수집 방법</p>
                <input type="text"
                    className='w-full rounded-full border p-2'
                    placeholder='수집 방법'
                    value={dataCollection}
                    onChange={(e) => setDataCollection(e.target.value)}
                />
                <div>
                    {
                        dataCollectionExamples.map((example, index) => {
                            return (
                                <div key={index} 
                                    className='w-full text-center text-sm p-1 m-2 rounded-xl cursor-pointer opacity-30 hover:opacity-100 mx-auto'
                                    style={{
                                        background: 'rgba(192, 38, 211, 0.2)',
                                        borderRadius: '16px',
                                        backdropFilter: 'blur(5px)',
                                        WebkitBackdropFilter: 'blur(5px)',
                                        border: '1px solid rgba(192, 38, 211, 0.3)',
                                    }}
                                    onClick={() => setDataCollection(example)}>
                                    {example}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </div>
    )
}

export default Data;