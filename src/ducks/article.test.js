import reducer, {
  articleCreating,
  articleSuccess,
  articleError,
} from './article';

describe('article', () => {
  it('리듀서 테스트', () => {
    const state = reducer(undefined, articleCreating());
    expect(state).toEqual({
      creating: true,
      success: false,
      errorMessage: '',
    });
  });
});

describe('article', () => {
  it('리듀서 테스트', () => {
    const state = reducer(undefined, articleSuccess());
    expect(state).toEqual({
      creating: false,
      success: true,
      errorMessage: '',
    });
  });
});

// describe('article', () => {
//   it('리듀서 테스트', () => {
//     const state = reducer(undefined, articleError());
//     expect(state).toEqual({
//       creating: false,
//       success: false,
//       errorMessage: action.errorMessage,
//     });
//   });
// });
