import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const adminPages = [
    {'text': 'Pages', 'route': '/admin/pages',},
    {'text': 'Publications', 'route': '/admin/publications',},
    {'text': 'General Settings', 'route': '/admin/global',},
  ]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        { 
        adminPages.map((item, index) =>
          <div className='bg-blue-200 p-3 m-3 rounded-2xl'>
            <Link href={item.route} key={index}>{item.text}</Link>
          </div>
        )}
      </main>
    </div>
  )
}
