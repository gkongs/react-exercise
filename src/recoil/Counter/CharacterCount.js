import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from './states';

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <div>Character Count : {count}</div>;
}
