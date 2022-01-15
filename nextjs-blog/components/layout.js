import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import * as utilStyles from '../styles/utils';
import Link from 'next/link';
import Nav from './Nav';
import HeadInfo from './HeadInfo';

const title = 'NextJS';
const navList = [
  { name: 'home', path: '/' },
  { name: 'posts', path: '/posts' },
  { name: 'photos', path: '/photos' },
];

export default function Layout({ children }) {
  return (
    <>
      <Nav list={navList} />
      <StyledLayout>
        <HeadInfo title={title} />
        <main>{children}</main>
      </StyledLayout>
    </>
  );
}

const StyledLayout = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;
