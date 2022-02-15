import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from './store';

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <div>Character Count : {count}</div>;
}
