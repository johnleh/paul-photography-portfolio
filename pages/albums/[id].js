import Head from 'next/head'
import {album_data} from '../../public/images/album_data.js'

//Page used for album view, givin an ID, allows for the propper album to be shown

//Getting photo album paths from album_data
//returns the paths for each album
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

//Gets the propper album through id
//Allows for page to propperly know which album to show
export const getStaticProps = async (context) => {
    return {
        props : {album : album_data.find(album => album.id === context.params.id)}
    }
}

//Page itself
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