import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata={title:'StubHub Complaints | Independent Consumer Forum',description:'A factual consumer forum for ticket marketplace complaints, refunds, fees, delivery problems, and customer service experiences.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
