import React from 'react';

// 장바구니에 담기거나 제외되는 항목을 상태관리하는 컨텍스트
// 컨텍스트의 초기 객체가 뭘 담는 지를 정의
const CartContext = React.createContext({
  items: [], // 장바구니에 담긴 항목 배열
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
