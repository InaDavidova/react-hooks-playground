import React, { useReducer, useState } from "react";
import uniqid from "uniqid";

type Product = {
  id: string;
  product: string;
  completed: boolean;
};

enum ACTIONS {
  ADD_ITEM = "add_item",
  TOGGLE_COMPLETE_ITEM = "toggle_complete_item",
  DELETE_ITEM = "delete_item",
  DELETE_COMPLETED_ITEMS = "delete_completed_item",
}

const reducerFunction = (products: Product[], action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return [
        ...products,
        { id: uniqid(), product: action.payload.product, completed: false },
      ];
    case ACTIONS.TOGGLE_COMPLETE_ITEM:
      return products.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      });
    case ACTIONS.DELETE_ITEM:
      return products.filter((el) => el.id !== action.payload.id);
    case ACTIONS.DELETE_COMPLETED_ITEMS:
      return products.filter((el) => !el.completed);
    default:
      return products;
  }
};

const UseReducerExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [products, dispatch] = useReducer(reducerFunction, []);
  // const [products, setProducts] = useState<Product[]>([]);

  const formSubmitHandle = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    dispatch({ type: ACTIONS.ADD_ITEM, payload: { product: inputValue } });

    // setProducts((prevState) => [
    //   ...prevState,
    //   { id: uniqid(), product: inputValue, completed: false },
    // ]);

    setInputValue("");
  };

  // const onToggleCompleteHandle = (id: string) => {
  //   setProducts((prevState) => {
  //     return prevState.map((el) => {
  //       if (el.id === id) {
  //         return { ...el, completed: !el.completed };
  //       }
  //       return el;
  //     });
  //   });
  // };

  // const onDeleteHandle = (id: string) => {
  //   setProducts((prevState) => {
  //     const newState = prevState.filter((el) => el.id !== id);
  //     return newState;
  //   });
  // };

  // const cleanListHandle = () => {
  //   setProducts((prevState) => {
  //     const newState = prevState.filter((el) => !el.completed);
  //     return newState;
  //   });
  // };

  return (
    <>
      <h2>useReducer</h2>

      <form onSubmit={formSubmitHandle}>
        <h3>Shopping List</h3>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add items"
        />
      </form>

      {!products.length && <p>No produsts in the list</p>}

      <ul id="productsList">
        {products.map((el) => (
          <li key={el.id} className={el.completed ? "completed" : ""}>
            {el.product}

            <button
              className={"roundBtn " + (el.completed ? "undoneBtn" : "doneBtn")}
              onClick={() => dispatch({ type: ACTIONS.TOGGLE_COMPLETE_ITEM, payload: { id: el.id } })}
              // onClick={() => onToggleCompleteHandle(el.id)}
            >
              {el.completed ? "\u21B6" : "\u2713"}
            </button>

            <button
              className="roundBtn deleteBtn"
              onClick={() => dispatch({ type: ACTIONS.DELETE_ITEM, payload: { id: el.id } })}
              // onClick={() => onDeleteHandle(el.id)}
            >
             {'\u2715'}
            </button>
          </li>
        ))}

        <button
          onClick={() => dispatch({ type: ACTIONS.DELETE_COMPLETED_ITEMS })}
          // onClick={cleanListHandle}
        >
          Clean List
        </button>

        <span>*Remove all completed tasks</span>
      </ul>
    </>
  );
};

export default UseReducerExample;
