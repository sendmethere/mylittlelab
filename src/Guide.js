import React from "react";
import useStore from "./store";

const Guide = () => {
    const {menu} = useStore();
    return (
        <div>
            <div className="mb-8">
                <p className='font-bold text-lg my-2'>🔬 My Little LAB을 소개합니다!</p>
                <hr className='my-2'/>
                <p className='my-2'>
                    My Little LAB은 데이터 기반 현장 연구를 시작하는 선생님들을 위한 연구 계획 설계 도우미입니다. <br/>
                    주제 설정부터 데이터까지 순서대로 흐름을 따라가다보면 결과물에서는 한 장의 완성된 미니 계획서를 보실 수 있을 거예요.
                </p>
            </div>
            <div className="mb-4">
            <p className='font-bold text-lg my-2'>📝 사용 가이드</p>
            <hr className='my-2'/>
            <p className='my-2'>
                <ul className='list-disc list-inside'>
                <li className="my-2"><span className="text-rose-600">주제 설정부터 데이터까지 꼭 순서대로 흐름을 따를 필요는 없습니다.</span> 여러분의 주변에서 쉽게 찾을 수 있는 데이터를 찾아보는 것에서부터 시작해보는 것도 좋습니다.</li>
                <li className="my-2">내가 잘 쓰고 있나 막막할 때는 각 페이지의 <span style={{borderColor : menu[0].color, color: menu[0].textColor}} className='border rounded-full p-1 px-3'>가이드</span>를 참고해보세요.</li>
                <li className="my-2">각 페이지에는 여러분들이 고를 수 있는 예시들이 있습니다. 그러나 이 예시들은 여러분의 교육 현장과 동떨어진 것들일 수도 있습니다. 직접 입력하는 것을 추천합니다.</li>
                </ul>
            </p>
            <p className="text-center mt-8 font-bold text-xl">여러분의 현장 연구를 응원합니다!</p>
            <p className='text-center mt-6 text-gray-400'>
                만든이 : <a className='underline' href='https://litt.ly/tto_ssaem'>김은서</a>, <a className="underline" href="https://slashpage.com/taesangeom/5r398nmngr1wz2vwje7y?e=1">엄태상</a>
            </p>
            </div>
        </div>
    )
}

export default Guide;