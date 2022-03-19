import Head from 'next/head'
import AlbumSnippet from '../comps/album_snippets';

//Homepage
export default function Home() {
  return (
    <>
      <Head>
        <title>PLH | Home</title>
      </Head>
      <div className="page_container">
        <div className="home_hero">
          <h1 className="home_hero_title">Paul Le Houillier&apos;s Photography</h1>
          <div className="underline"/>
        </div>
        <AlbumSnippet/>
      </div>
    </>
  )
}
