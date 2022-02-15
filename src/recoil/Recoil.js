import React from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './Counter/CharacterCounter';

export default function Recoil() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
