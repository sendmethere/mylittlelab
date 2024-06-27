import { create } from 'zustand';
import Topic from './Topic';
import Variables from './Variables';

const useStore = create(set => ({
    menu: [
    { id: 1, name: 'Topic', title: '주제 설정', color: '#81CB9F', icon: 'topic.png', page: <Topic/>},
    { id: 2, name: 'Variables', title: '변인', color: '#81CBCB', icon: 'topic.png', page: <Variables/>},
    { id: 3, name: 'Method', title: '연구 방법', color: '#819FCB', icon: 'topic.png'},
    { id: 4, name: 'DataCollection', title: '데이터', color: '#8381CB', icon: 'topic.png'},
    { id: 5, name: 'Report', title: '결과물', color: '#A681CB', icon: 'topic.png'}
    ],
    currentMenu: 0,
    topic: '',
    independentVariable: '',
    dependentVariable: '',
    method: '',
    data: '',
    dataCollection: '',
    consideration: '',
    
    setCurrentMenu: (currentMenu) => set({ currentMenu }),
    setTopic: (topic) => set({ topic }),
    setIndependentVariable: (independentVariable) => set({ independentVariable }),
    setDependentVariable: (dependentVariable) => set({ dependentVariable }),
    setMethod: (method) => set({ method }),
    setData: (data) => set({ data }),
    setDataCollection: (dataCollection) => set({ dataCollection }),
    setConsideration: (consideration) => set({ consideration }),

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
}));

export default useStore;
