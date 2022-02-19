import React from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './Counter/CharacterCounter';
import ToDoList from './TodoList/TodoList';

export default function Recoil() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <TodoList />
    </RecoilRoot>
  );
}
