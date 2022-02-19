import { atom, selector } from 'recoil';

// atoms
export const textState = atom({
  key: 'textState', // key는 유니크해야함
  default: '', // 기본 값
});

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
