import React from 'react';
import { useRecoilState } from 'recoil';
import CharacterCount from './CharacterCount';
import { textState } from './states';
export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <input value={text} onChange={onChange} />
      <br />
      Echo : {text}
    </div>
  );
}
