import './style.css'

export default function Header() {
  const path = window.location.pathname
  return (
    <div
      className={'main-header'}
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
      <a
        style={{
          fontSize: 18,
          textDecoration: path === '/' ? 'green wavy underline' : '',
          fontWeight: 500,
        }}
        href='/'
      >
        Home
      </a>
      <a
        style={{
          fontSize: 18,
          textDecoration: path === '/profile' ? 'green wavy underline' : '',
          fontWeight: 500,
        }}
        href='/profile'
      >
        Profile
      </a>
      <a
        style={{
          fontSize: 18,
          textDecoration: path === '/statistics' ? 'green wavy underline' : '',
          fontWeight: 500,
        }}
        href='/statistics'
      >
        Statistics
      </a>
      <a
        style={{
          fontSize: 18,
          textDecoration: path === '/contributions' ? 'green wavy underline' : '',
          fontWeight: 500,
        }}
        href='/contributions'
      >
        Contributions
      </a>
      <a
        style={{
          fontSize: 18,
          textDecoration: path === '/login' ? 'green wavy underline' : '',
          fontWeight: 500,
          marginRight: 100,
        }}
        href='/faq'
      >
        Login
      </a>
      <a
        style={{
          fontSize: 18,
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
