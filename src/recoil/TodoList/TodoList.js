import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from './states';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />
      {todoList.map(item => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
}
