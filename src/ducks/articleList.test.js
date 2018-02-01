import reducer, { // default import는 따로 써줌
  LOADING,
  articleListLoading,
} from './articleList';

describe('articleList', () => {
  it('articleListLoading 동작 여부 확인', () => {
    const action = articleListLoading();
    expect(action).toEqual({
      type: LOADING,
    });
  });

  it('reducer 초기 상태 테스트', () => {
    const state = reducer(undefined, {}); // undefined를 넘기면 initialState를 비교
    expect(state.loading).toBe(false);
    expect(state.articles).toEqual([]); // 객체는 깊은비교 : toEqual()
  });

  it('articleListLoading 넘겼을 때의 상태', () => {
    const state = reducer(undefined, articleListLoading());
    expect(state.loading).toBe(true);
    expect(state.articles).toEqual([]);
  });

  it('articleListLoading를 articles가 존재하는 상태에 적용', () => {
    const state = reducer({ // {객체를 넘기면} 객체와 비교
      loading: false,
      articles: [1, 2, 3],
    }, articleListLoading());
    expect(state.loading).toBe(true);
    expect(state.articles).toEqual([1, 2, 3]);
  });
});
