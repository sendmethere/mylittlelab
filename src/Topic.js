import { useState } from 'react';
import useStore from './store';
import topic_guide from './topic_guide.png'

const Topic = () => {
    const { menu, topic, setTopic, topicExamples } = useStore();

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
            <div className='flex justify-between items-center'><label className='font-bold text-lg my-2'>주제</label><span 
            style={{borderColor : menu[1].color, color: menu[1].textColor}} 
            className='text-sm p-1 px-2 border rounded-full cursor-pointer'
            onClick={handleModalOpen}> 가이드 </span>
            </div>
            <input type="text" 
                className='w-full rounded-full border p-4' 
                value={topic} 
                onChange={(e) => setTopic(e.target.value)}
                placeholder='멋진 연구 주제를 입력하세요!' />
        </div>
        <hr className='my-4'/>
        <p className='font-bold text-lg my-2'>주제 잡는 Tip!</p>
        <div className='rounded-xl text-[#4c8e67] p-4' style={{backgroundColor: 'rgba(114, 204, 143, 0.1)'}}>
            데이터 기반 현장 연구의 주제는 구체적이고, 교육적 가치가 있어야 하며, 실행가능해야 합니다. 여러분의 도전 과제를 찾아보세요!
        </div>
        <hr className='my-4'/>
        <p className='font-bold text-lg my-2'>주제 예시</p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 justify-center'>
            {topicExamples.map((example, index) => {
                return (
                    <div key={index} 
                        className='w-full md:w-[150px] h-[150px] text-center p-2 m-2 rounded-xl cursor-pointer mx-auto  transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1'
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
        {isModalOpen && (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleModalClose}
        >
        <div 
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside the modal content
        >
            <img src={topic_guide} alt="Example" />
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

export default Topic;