import Head from 'next/head'
import {album_data} from '../../public/images/album_data'
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: {
      album_list : album_data
    }
  }
}

export default function Albums({ album_list }) {
    return (
        <>
            <Head>
                <title>PLH | Albums</title>
            </Head>
            <div>
                <h1>Albums</h1>
                {album_list.map(album => (
                  <Link href={'/albums/' + album.id}>
                    <a>
                      <div key={album.id}>
                          <h3>{album.name}</h3>
                      </div>
                    </a>
                  </Link>
                ))}
            </div>
      </>
    );
}
 