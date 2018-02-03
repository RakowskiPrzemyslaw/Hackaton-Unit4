import { FETCH_USER, SKILL_CHANGE, ADD_WANT, ADD_SKILL } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USER: {
      return action.payload;
    }
    case ADD_WANT: {
      const user = { ...state, wantToLearn: [...state.wantToLearn, action.payload.skill] };
      action.payload.cb(user);
      return user;
    }
    case ADD_SKILL: {
      const user = { ...state, skills: [...state.skills, action.payload.skill] };
      action.payload.cb(user);
      return user;
    }
    case SKILL_CHANGE: {
      const skills = state.skills.map((skill) => {
        if (skill.name === action.payload.name) {
          skill.value = action.payload.value;
        }
        return skill;
      });
      const user = { ...state, skills }
      action.payload.cb(user);
      return user;
    }
    default: {
     return state;
    }
  }
}
