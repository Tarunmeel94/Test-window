import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 id:1,
 answers:[{answer:""},{answer:""},{answer:""},{answer:""},{answer:""},{answer:""},{answer:""},{answer:""},{answer:""},{answer:""}],
 yourScore:0.0
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
  setId:(state,action)=>{
      state.id=action.payload.id;
  },
  increaseScore:(state)=>{
    state.yourScore+=4
  },
  decreaseScore:(state)=>{
    state.yourScore-=1
  },
  halfScore:(state,action)=>{
    state.yourScore=(state.yourScore);
  },
  setAnswer:(state,action)=>{
    state.answers[state.id-1].answer=action.payload.answer
  }
  },
});

export const {setId,increaseScore,decreaseScore, halfScore,setAnswer} = questionSlice.actions;

export const selectId = (state) => state.question.id;
export const selectYourScore = (state) => state.question.yourScore;
export const selectAnswers = (state) => state.question.answers;


export default questionSlice.reducer;
