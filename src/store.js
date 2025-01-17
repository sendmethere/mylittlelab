import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import Topic from './Topic';
import Variables from './Variables';
import Data from './Data';
import Method from './Method';
import Report from './Report';
import Guide from './Guide';


const useStore = create(
    persist(
            set => ({
            menu: [
            { id: 1, name: 'Guide', title: '가이드', color: '#CCDF97', textColor:'#90A948', icon: 'topic.png', page: <Guide/>},
            { id: 2, name: 'Topic', title: '주제 설정', color: '#81CB9F', textColor: '#3D9B63', icon: 'topic.png', page: <Topic/>},
            { id: 3, name: 'Variables', title: '변인', color: '#81CBCB', textColor: '#41AFAF', icon: 'topic.png', page: <Variables/>},
            { id: 4, name: 'Method', title: '연구 방법', color: '#819FCB', textColor: '#3763A2', icon: 'topic.png', page: <Method/>},
            { id: 5, name: 'DataCollection', title: '데이터', color: '#8381CB', icon: 'topic.png', page: <Data/>},
            { id: 6, name: 'Report', title: '결과물', color: '#A681CB', icon: 'topic.png', page: <Report/>}
            ],
            currentMenu: 0,
            topic: '',
            independentVariable: '',
            dependentVariable: '',
            method: '',
            data: '',
            dataCollection: '',
            consideration: '',
            subject: '',
            
            selectedProperties: [],
            properties: [
                {
                    title: '연구 목적',
                    items: ['결과 일반화', '심층적 이해'],
                },
                {
                    title: '연구 방법',
                    items: ['정량적 방법', '정성적 방법'],
                },
                {
                    title: '연구 대상',
                    items: ['대규모 인원', '소규모 인원'],
                },
                {
                    title: '연구 데이터',
                    items: ['수치 데이터', '비수치 데이터'],
                },
                {
                    title: '분석 방법',
                    items: ['통계 분석', '주제 분석'],
                },
            ],

            setCurrentMenu: (currentMenu) => set({ currentMenu }),
            setTopic: (topic) => set({ topic }),
            setIndependentVariable: (independentVariable) => set({ independentVariable }),
            addIndependentVariable: (item) => set((state) => {
                const independentVariable = state.independentVariable;
                if (independentVariable === '') {
                    return { independentVariable: item };
                } else {
                    return { independentVariable: `${independentVariable}, ${item}` };
                }
            }),
            setDependentVariable: (dependentVariable) => set({ dependentVariable }),
            addDependentVariable: (item) => set((state) => {
                const dependentVariable = state.dependentVariable;
                if (dependentVariable === '') {
                    return { dependentVariable: item };
                } else {
                    return { dependentVariable: `${dependentVariable}, ${item}` };
                }
            },
            ),
            setMethod: (method) => set({ method }),
            setData: (data) => set({ data }),
            addData: (item) => set((state) => {
                const data = state.data;
                if (data === '') {
                    return { data: item };
                } else {
                    return { data: `${data}, ${item}` };
                }
            }),
            setDataCollection: (dataCollection) => set({ dataCollection }),
            setConsideration: (consideration) => set({ consideration }),
            setSubject: (subject) => set({ subject }),
            
            selectProperty: (item) => set((state) => {
                const selectedProperties = state.selectedProperties || [];
                if (selectedProperties.includes(item)) {
                    return { selectedProperties: selectedProperties.filter(i => i !== item) };
                } else {
                    return { selectedProperties: [...selectedProperties, item] };
                }
            }),

            topicExamples: [
                '스마트교육 디지털교과서 효과성 검증 도구 개발',
                '초등 Upcycling 교육프로그램이 창의적 문제해결력에 미치는 영향 연구',
                '마인크래프트를 통한 지속가능한 도시재생 프로그램이 초등학생의 창의적 성향에 미치는 효과',
                'Dewey의 ‘하나의 경험’에 기초한 사례기반학습의 교수전략 탐색',
                '온라인 협업 플랫폼 사용과 집단 내 상호작용 향상의 상관성',
                '디지털 미디어를 통한 교육과 학생의 비판적 사고력 강화의 연관성',
                '디지털 교과서를 통한 맞춤형 교육이 학생들의 학습 성취도에 미치는 영향',
                '플립 러닝 모델과 학생들의 자기주도학습능력 강화 사이의 상관관계',
                '디지털 도구를 활용한 시각적 학습 자료가 학습 효율에 미치는 영향',
                '개념 기반 교육이 학생들의 주제별 깊이 있는 이해도에 미치는 효과'
            ],

            independentVariableExamples: [
                '디지털교과서 사용 여부',
                '디지털교과서의 특정 기능 사용 여부',
                'Upcycling 교육프로그램 참여 여부',
                '교육프로그램의 강도나 시간',
                '마인크래프트 프로그램 참여 여부',
                '프로그램의 지속 시간',
                '사례기반학습 적용 여부',
                '‘하나의 경험’ 원칙 적용 여부',
                '온라인 협업 플랫폼 사용 여부',
                '협업 플랫폼의 특정 기능 사용 여부',
                '디지털 미디어 사용 여부',
                '사용된 디지털 미디어의 유형',
                '플립 러닝 모델 적용 여부',
                '플립 러닝 세션의 빈도',
                '디지털 시각적 학습 자료 사용 여부',
                '사용된 시각적 자료의 유형',
                '개념 기반 교육 적용 여부',
                '교육 세션의 길이나 빈도'

            ],
            dependentVariableExamples: [
                '학습 성취도 점수',
                '학습 참여도',
                '이해도 및 만족도',
                '창의적 문제해결력 점수',
                '창의적 사고 능력',
                '창의적 성향 점수',
                '문제 해결 능력',
                '집단 내 상호작용 빈도 및 질',
                '협업 능력',
                '비판적 사고력 점수',
                '문제 분석 및 해결 능력',
                '이해도 및 기억력',
                '자기주도학습 능력 점수',
                '학습 독립성 및 동기 부여 수준',
                '학습 효율성 점수',
                '정보 이해 및 기억력',
                '주제별 깊이 있는 이해도 점수',
                '개념 적용 능력'
            ],
            dataExamples: [
                '자기주도학습 역량',
                '비판적사고력',
                '창의적사고력',
                '학습 동기',
                '학생 출석률', 
                '시험 성적', 
                '과제 제출율', 
                '학생 참여도', 
                '학생 간의 상호작용 빈도', 
                '수업 만족도', 
                '학습 태도', 
                '학급 분위기', 
                '학생 상담 요청 횟수', 
                '건강 상태 보고서', 
                '수업 중 질문 횟수', 
                '수업 중 발표 횟수', 
                '수업 준비물 완비율', 
                '교과서와 노트 필기 상태', 
                '학생의 자발적 학습 시간', 
                '교우 관계 만족도', 
                '학생의 수업 집중도', 
                '수업 몰입도', 
                '학부모 면담 요청 횟수', 
                '학생의 감정 상태', 
                '학생의 숙제 완성도', 
                '프로젝트 참여도', 
                '학교 행사 참여도', 
                '수업 후 질문 횟수', 
                '수업 중 교사와의 상호작용 횟수', 
                '학생의 독서 시간', 
                '학생의 운동 시간', 
                '교사의 수업 준비 시간', 
                '수업 자료 활용도', 
                '학생의 자기 평가', 
                '그룹 활동 참여도', 
                '학습 목표 달성도', 
                '학습 계획 수립 여부', 
                '수업 중 스마트폰 사용 빈도', 
                '수업 중 집중 방해 요소 발생 빈도', 
                '학생의 스트레스 수준', 
                '학생의 수면 시간', 
                '학습 도구 활용도', 
                '수업 중 창의적 아이디어 제시 횟수', 
                '학생의 학습 목표 달성 비율', 
                '학생의 성취 감각', 
                '수업 중 발표 점수', 
                '팀워크 점수', 
                '발표 준비 시간', 
                '학생의 학습 스타일(장의존형/장독립형)', 
                '수업 중 피드백 제공 빈도', 
                '학생의 문제 해결 능력', 
                '수업 중 협력 활동 횟수', 
                '교사의 학습 지원 빈도'
                ],
                dataCollectionExamples: [
                '설문조사: 특정 주제에 대한 학생, 교사, 학부모의 의견을 수집',
                '인터뷰: 개별 또는 집단 인터뷰를 통해 심층적인 정보 수집',
                '의사소통 상호작용 분석: 교실 상황을 직접 관찰하여 비언어적 상호작용, 학습 환경 등을 기록',
                '집단 토론: 특정 주제에 대한 학생 또는 교사들의 의견을 그룹 토론을 통해 수집',
                '학습일지: 학생들이 학습 과정에서의 경험, 느낌, 아이디어를 기록',
                '포트폴리오 분석: 학생들의 작업물을 모아 학습 성과를 평가',
                'AI디지털교과서 데이터 분석: AI디지털 교과서가 제공하는 다양한 데이터 활용',
                '수업 비디오 녹화: 수업을 비디오로 녹화하여 나중에 분석',
                '자가 보고 방법: 학생이나 교사가 자신의 행동, 태도, 감정 등을 스스로 평가한 내용 수집',
                '학습자 의견 박스: 익명으로 학생들의 의견을 수집',
                '학부모 인터뷰: 학부모와의 인터뷰를 통해 가정에서의 학습 지원과 태도에 대한 정보를 수집'
                ],
            }),
            {
                name: 'mylittlelab',
                partialize: (state) => ({ // 상태의 일부분만 저장
                    currentMenu: state.currentMenu,
                    topic: state.topic,
                    dependentVariable: state.dependentVariable,
                    independentVariable: state.independentVariable,
                    method: state.method,
                    data: state.data,
                    dataCollection: state.dataCollection,
                    consideration: state.consideration,
                    selectedProperties: state.selectedProperties,
                }),
            })
    );

export default useStore;
