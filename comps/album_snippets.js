import Link from "next/link";
import {album_data} from '../public/images/album_data.js'
import React from 'react'


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

/*
{album_data.map(function (album) {
            return (
              <div>
                <Link href={'/albums/' + album.id} key={album.id}>
                    <a>{album.name}</a>
                </Link>
              </div>
            )
          })}
    
*/
