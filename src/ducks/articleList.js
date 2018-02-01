import * as firebase from 'firebase';

// Actions
export const LOADING = 'articleList/LOADING';
export const SUCCESS = 'articleList/SUCCESS';

// Action Creator
export function articleListLoading() {
  return {
    type: LOADING,
  };
}

export function articleListSuccess(articles) {
  return {
    type: SUCCESS,
    articles,
  };
}

// Reducers
const initialState = {
  loading: false,
  articles: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        loading: false,
        articles: action.articles,
      };
    default:
      return state;
  }
}

// Thunk
export const fetchArticleList = () => async (dispatch) => {
  dispatch(articleListLoading());
  const snapshot = await firebase.database().ref('articles').once('value');
  const articleObj = snapshot.val(); // 객체를 가져옴 -> 배열의 형태로 변환필요
  const articles = Object.entries(articleObj).map(([id, article]) => ({
    ...article,
    id,
    nickName: 'Bong', // FIXME : 나중에 수정필요
  }));
  dispatch(articleListSuccess(articles));
};

