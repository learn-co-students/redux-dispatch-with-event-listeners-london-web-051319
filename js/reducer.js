// add code snippets from README

let state = {count: 0}

let add = document.querySelector("button.increase");
add.addEventListener('click', () => dispatch({type: "INCREASE_COUNT"})) ;
let remove = document.querySelector("button.decrease");
remove.addEventListener('click', () => dispatch({type: "DECREASE_COUNT"})) ;


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {count: state.count + 1}
    case "DECREASE_COUNT":
      return {count: state.count - 1}

    default:
      return state;
  }
}

const dispatch = (action) => {
  state = reducer(state, action);
  render();
}

const render = () => {
  let element = document.querySelector("#container");
  element.textContent = state.count;
}

render();
// dispatch({type: "@@INIT"});