import Head from 'next/head'
import AlbumSnippet from '../../comps/album_snippets';

//Page that shows all albums
export default function Albums() {
    return (
        <>
            <Head>
                <title>PLH | Albums</title>
            </Head>
            <div className="page_container">
                <h1>Albums</h1>
                <AlbumSnippet/>
            </div>
      </>
    );
}
 