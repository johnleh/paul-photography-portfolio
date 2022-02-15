import Head from 'next/head'
import AlbumSnippet from '../../comps/album_snippets';


export default function Albums({ album_list }) {
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
 