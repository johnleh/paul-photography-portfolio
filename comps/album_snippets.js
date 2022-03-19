import Link from "next/link";
import {album_data} from '../public/images/album_data.js'
import React from 'react'

/*
  AlbumSnippets are the cards that show a preview of a photo album
*/
class AlbumSnippet extends React.Component {
  render() {
    return (
      <div className="album_snippet_container"> {
        album_data.map(function (album) {
          return (
            <>
            <h2 className="album_snippet_title">
              {album.name}
              <Link href={'/albums/' + album.id} key={album.id}>
                  <a className="album_snippet_button">Explore all <i class="arrow_right"></i></a>
              </Link>
            </h2>
            {/*Actual images, pics the first 3 of the album [only one right now...]*/}
            <div className="album_snippet">              
              <table className="album_snippet_table">
                <tr>
                  <td>
                    <div className="album_snippet_image_container">
                      <img className="album_snippet_image" src={album.images[0].path}/>
                    </div>
                  </td>
                  <td>
                    <div className="album_snippet_image_container">
                      <img className="album_snippet_image" src={album.images[0].path}/>
                    </div>
                  </td>
                  <td>
                    <div className="album_snippet_image_container">
                      <img className="album_snippet_image" src={album.images[0].path}/>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            </>
          )
        })
      }</div>
    );
  }     
}
export default AlbumSnippet


