import React from 'react';
import './style.css';
import logoImage from '../../../images/Logo_green_title.png'; // 替换为您的 logo 图片路径

export default function Header() {
  const path = window.location.pathname;
  return (
    <div
      className={'main-header'}
      className={'menuBtn'}
      style={{
        width: '100%',
        backgroundColor: '#F1F2EE',
        display: 'flex',
        gap: 50,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        borderBottom: '1px solid #777',
      }}
    >
      <img 
        className={'headerLogo'}
        src={logoImage} 
        alt="Logo" 
        
      />
      <a
        className={'menuBtn1'}
        style={{
          fontSize: 16,
          textDecoration: path === '/' ? 'green wavy underline' : '',
          fontWeight: 500,
        }}
        href='/'
      >
        Home
      </a>
      <a
        className={'menuBtn2'}
        style={{
          fontSize: 16,
          textDecoration: path === '/profile' ? 'green wavy underline' : '',
          fontWeight: 500,
        }}
        href='/profile'
      >
        Profile
      </a>
      <a
        className={'menuBtn3'}
        style={{
          fontSize: 16,
          textDecoration: path === '/statistics' ? 'green wavy underline' : '',
          fontWeight: 500,
        }}
        href='/statistics'
      >
        Statistics
      </a>
      <a
        className={'menuBtn4'}
        style={{
          fontSize: 16,
          textDecoration: path === '/contributions' ? 'green wavy underline' : '',
          fontWeight: 500,
        }}
        href='/contributions'
      >
        Contributions
      </a>
      <a
        className={'menuBtn5'}
        style={{
          fontSize: 16,
          textDecoration: path === '/login' ? 'green wavy underline' : '',
          fontWeight: 500,
          marginRight: 100,
        }}
        href='/login'
      >
        Login
      </a>
      <a
        className={'menuBtn6'}
        style={{
          fontSize: 16,
          textDecoration: path === '/faq' ? 'green wavy underline' : '',
          fontWeight: 500,
          marginRight: 100,
        }}
        href='/faq'
      >
        FAQ
      </a>
    </div>
  )
}
