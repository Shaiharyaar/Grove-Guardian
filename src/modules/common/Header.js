export default function Header() {
    const path = window.location.pathname;
    return (
      <>
        <div style={{width: "100%", backgroundColor: "#F1F2EE", display: "flex", gap: 50, justifyContent: "flex-end",  alignItems: "center",  flexDirection: "row", height: 60}}>
          <a style={{fontSize: 18, textDecoration: path === "/" ? "green wavy underline" : "", fontWeight: 500}} href='/'>Home</a>
          <a style={{fontSize: 18, textDecoration: path === "/profile" ? "green wavy underline" : "", fontWeight: 500}} href='/profile'>Profile</a>
          <a style={{fontSize: 18, textDecoration: path === "/statistics" ? "green wavy underline" : "", fontWeight: 500}} href='/statistics'>Statistics</a>
          <a style={{fontSize: 18, textDecoration: path === "/add-contribution" ? "green wavy underline" : "", fontWeight: 500}} href='/add-contribution'>My Contributions</a>
          <a style={{fontSize: 18, textDecoration: path === "/faq" ? "green wavy underline" : "", fontWeight: 500, marginRight: 100}} href='/faq'>FAQ</a>
        </div>
        <div style={{height: 2, widoth: "100%", backgroundColor: "black"}}></div>
    </>
    )
}