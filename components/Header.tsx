import Link from 'next/link';
export default function Header(){return <header className="header"><div className="container nav"><Link className="brand" href="/">StubHub Complaints</Link><nav className="links"><Link href="/complaints">Browse</Link><Link href="/submit">Submit</Link><Link href="/faq">FAQ</Link><Link href="/about">About</Link></nav></div></header>}
