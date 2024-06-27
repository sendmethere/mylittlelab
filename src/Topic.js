import useStore from './store';

const Topic = () => {
    const { topic, setTopic, topicExamples } = useStore();
    return (
        <div>
        <div className='flex flex-col mb-4'>
            <label className='font-bold text-lg my-2'>주제</label>
            <input type="text" className='w-full rounded-full border p-4' value={topic} onChange={(e) => setTopic(e.target.value)} />
        </div>
        <hr className='my-4'/>
        <p className='font-bold text-lg my-2'>주제 잡는 Tip!</p>
        <div className='rounded-xl text-[#4c8e67] p-4' style={{backgroundColor: 'rgba(114, 204, 143, 0.2)'}}> TIP</div>
        <hr className='my-4'/>
        <p className='font-bold text-lg my-2'>주제 예시</p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 justify-center'>
            {topicExamples.map((example, index) => {
                return (
                    <div key={index} 
                        className='w-full md:w-[150px] h-[150px] text-center p-2 m-2 rounded-xl cursor-pointer mx-auto'
                        style={{
                            background: 'rgba(114, 204, 143, 0.2)',
                            borderRadius: '16px',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            backdropFilter: 'blur(5px)',
                            WebkitBackdropFilter: 'blur(5px)',
                            border: '1px solid rgba(114, 204, 143, 0.3)',
                        }}
                        onClick={() => setTopic(example)}>
                        {example}
                    </div>
                )
            })}
        </div>
        </div>
    );

}

export default Topic;