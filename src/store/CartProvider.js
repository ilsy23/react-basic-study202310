import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = {
  items: [],
  totalPrice: 0,
};

// 리듀서 함수 정의: 여러가지 복잡한 상태관리를 중앙집중화
// state: 업데이트 하기 전의 상태값
// action: 어떤 업데이트를 하는지에 대한 정보와 필요값이 들어있음.
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // 신규 아이템
    const newCartItem = action.item;
    // 기존 장바구니에 등록된 메뉴인지 여부에 따라 다르게 처리
    const index = state.items.findIndex((item) => item.id === newCartItem.id);
    // 기존 아이템
    const existingItems = [...state.items]; // 기존 배열을 복사
    const prevCartItem = existingItems[index]; // 위에서 찾은 인덱스로 요소 하나 지목.

    let updatedItem;

    if (index === -1) {
      // 신규 아이템
      updatedItem = [...state.items, newCartItem];
    } else {
      // 기존 아이템 -> 수량을 1 올림
      prevCartItem.amount += newCartItem.amount; // 복사된 아이템의 수량을 늘림.
      updatedItem = [...existingItems]; // 새롭게 복사 배열을 갱신
    }

    const updatedPrice =
      state.totalPrice + newCartItem.price * newCartItem.amount;

    return {
      items: updatedItem,
      totalPrice: updatedPrice,
    }; // 이 액션에 대한 업데이트된 새로운 상태 반환.
  } else if ((action.type = 'REMOVE')) {
    // 기존 배열 복사
    const existingItems = [...state.items];
    // 제거 대상의 인덱스
    const index = existingItems.findIndex((item) => item.id === action.id);
    // 제거 대상 아이템 가져옴
    const delTargetItem = existingItems[index];

    // 총액 계산
    const updatedPrice = state.totalPrice - delTargetItem.price;

    // 업데이트 전의 수량이 1이라면 filter로 배열에서 아예 제외
    // 수량이 1보다 크면 기존 배열에서 수량을 1 내려 업데이트 해야 함
    let removedItems;
    if (delTargetItem.amount === 1) {
      removedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      delTargetItem.amount--;
      removedItems = [...existingItems];
    }

    return {
      items: removedItems,
      totalPrice: updatedPrice,
    };
  }

  return defaultState;
};

const CartProvider = ({ children }) => {
  // 리듀서 사용
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  // Provider의 value는 실제로 관리할 데이터 객체.
  const cartContext = {
    items: cartState.items, // 장바구니에 담긴 항목 배열
    totalPrice: cartState.totalPrice,
    addItem: (item) => {
      // 액션함수는 반드시 무슨 액션을 하는지와 액션에 필요한 값을 전달.
      dispatchCartAction({
        type: 'ADD',
        item: item,
      });
    },
    removeItem: (id) => {
      dispatchCartAction({
        type: 'REMOVE',
        id: id,
      });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
