import { GET_BOARDS, ADD_BOOKMARK } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case GET_BOARDS: {
      return action.payload;
    }

    case ADD_BOOKMARK: {
      const board = state.filter(x => x.id === action.payload.boardId)[0];
      const category = board.categories.filter(y => y.name === action.payload.categoryName)[0];
      category.bookmarks = [...category.bookmarks, action.payload.bookmark];
      const c = board.categories.map((cat) => {
        if (cat.name === action.payload.categoryName) {
          cat.bookmarks = category.bookmarks;
        }
        return cat;
      });
      const book = state.map((b) => {
        if (b.id === action.payload.boardId) {
          b.categories = c;
        }
        return b;
      });
      return book;
    }

    default: {
      return state;
    }
  }
}
