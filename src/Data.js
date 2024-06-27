import useStore from "./store"; 

const Data = () => {
    const { data, setData, dataCollection, setDataCollection, dataExamples, dataCollectionExamples } = useStore();

    return (
        <div>
            <p className='font-bold text-lg my-2'>수집할 데이터</p>
            <div className='flex flex-col md:flex-row gap-4 my-4'>
            <div className='w-full md:w-1/2 p-2 px-4 rounded-xl bg-orange-100'>
                <p className='text-center font-bold text-orange-700 my-2'>수집할 데이터</p>
                <input type="text"
                    className='w-full rounded-full border p-2'
                    placeholder='독립변인을 입력하세요'
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <div>
                    {
                        dataExamples.map((example, index) => {
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
                                    onClick={() => setData(example)}>
                                    {example}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full md:w-1/2 p-2 rounded-xl bg-lime-100'>
            <p className='text-center font-bold text-lime-700 my-2'>수집 방법</p>
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
                                        background: 'rgba(50, 205, 50, 0.2)',
                                        borderRadius: '16px',
                                        backdropFilter: 'blur(5px)',
                                        WebkitBackdropFilter: 'blur(5px)',
                                        border: '1px solid rgba(50, 205, 50, 0.3)',
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