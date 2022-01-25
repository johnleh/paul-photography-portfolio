import Head from 'next/head'
import {album_data} from '../../public/images/album_data'
import Image from 'next/image'

export const getStaticPaths = async () => {
  
    const paths = album_data.map(album => {
        return {
            params: {id: album.id} 
        }
    })
  
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    return {
        props : {album : album_data.find(album => album.id === context.params.id)}
    }
}

export default function AlbumView({album}) {
    return ( 
        <>
          <Head>
            <title>PLH | {album.name}</title>
          </Head>
          <div className="page_container">
            <h1>{album.name}</h1>
            
          </div>
        </>
     );
}