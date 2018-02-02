import * as firebase from 'firebase';

// Action
export const CREATING = 'article/CREATING';
export const SUCCESS = 'article/SUCCESS';
export const ERROR = 'article/ERROR';

// Action Creator
export function articleCreating() {
  return {
    type: CREATING,
  };
}

export function articleSuccess() {
  return {
    type: SUCCESS,
  };
}

export function articleError(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}

const initialState = {
  creating: false,
  success: false,
  errorMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATING:
      return {
        creating: true,
        success: false,
        errorMessage: '',
      };
    case SUCCESS:
      return {
        creating: false,
        success: true,
        errorMessage: '',
      };
    case ERROR:
      return {
        creating: false,
        success: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

export const createArticle = ({ title, content }) => async (dispatch) => {
  if (!title || !content) {
    dispatch(articleError('필드를 모두 채워주셔야 합니다.'));
    return;
  }
  const { currentUser } = firebase.auth();
  if (!currentUser) {
    return;
  }
  dispatch(articleCreating());
  try {
    const articleRef = firebase.database().ref('articles').push({
      title,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      uid: currentUser.uid,
    });
    const contentPromise = firebase.database().ref(`contents/${articleRef.key}`).set(content);
    await Promise.all([articleRef, contentPromise]);
    dispatch(articleSuccess());
  } catch (e) {
    dispatch(articleError(`알 수 없는 에러가 발생했습니다. 다시 시도해 주세요.: ${e.message}`));
  }
};

