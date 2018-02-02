import { FETCH_USER, SKILL_CHANGE } from '../actions/types';

export default function(state = {}, action){
  switch(action.type){
    case FETCH_USER: {
      return action.payload
    }
    case SKILL_CHANGE: {
      const skills = state.skills.map((skill) => {
        if (skill.name === action.payload.name) {
          skill.value = action.payload.value;
        }
        return skill;
      });
      return {...state, skills};
    }
    default: {
     return state;
    }
  }
}
