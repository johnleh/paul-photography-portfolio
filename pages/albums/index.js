import Head from 'next/head'
import {albums} from '../../data/albums'

export const getStaticProps = async () => {
  return {
    props: {
      albumList : albums
    }
  }
}

export default function Albums({ albumList }) {
    return (
        <>
            <Head>
                <title>PLH | Albums</title>
            </Head>
            <div>
                <h1>Albums</h1>
                <p>
                    {albumList.map(album => (<p key={album.id}>{album.name}</p>))}
                </p>
            </div>
      </>
    );
}
 