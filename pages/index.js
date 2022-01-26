import Head from 'next/head'
import Link from "next/link";
import {album_data} from '../public/images/album_data'

export const getStaticProps = async () => {
  return {
    props: {
      album_list : album_data
    }
  }
}

export default function Home({ album_list }) {
  return (
    <>
      <Head>
        <title>PLH | Home</title>
      </Head>
      <div className="page_container">
        <div className="home_hero">
          <nav>
              <div className="nav_buttons">
                  <Link href="/"><a>Home</a></Link>
                  <Link href="/about"><a>About</a></Link>
                  <Link href="/contact"><a>Contact</a></Link>
                  <Link href="/albums"><a>Albums</a></Link>
              </div>
          </nav>
          <h1 className="home_hero_title">Paul Le Houillier&apos;s Photography</h1>
          <div className="underline"/>
        </div>
        
        {album_list.map(album => (
          <div>
            <Link href={'/albums/' + album.id} key={album.id}>
              <a>{album.name}</a>
            </Link>
          </div>
        ))}
        <div>
          <Link href="/albums"><a>View More Albums</a></Link>
        </div>
      </div>
    </>
  )
}
