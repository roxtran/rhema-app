import React from 'react'
import { Platform } from 'react-native'
import { WebView } from 'react-native-webview'

const AudioBroadcast = ({ borderRadius }) => {
  const html =
    '<html><body><meta name="viewport" content="device-width, initial-scale=1, user-scalable=1.0">' +
    `<iframe src="https://open.spotify.com/embed-podcast/show/5hPhbj8qFlOeYWnmHxijxa" frameborder="0" style="position:absolute; width: 100%; height: 100%; border-radius: ${borderRadius}px; overflow: 'hidden'; left: 0; top: 0" allowtransparency="true" allow="encrypted-media"></iframe> ` +
    '</body></html>'
  return (
    <WebView
      style={{
        resizeMode: 'cover',
        flex: 1,
        opacity: 0.99,
        overflow: 'hidden',
      }}
      source={{ html: html }}
      mediaPlaybackRequiresUserAction={
        Platform.OS !== 'android' || Platform.Version >= 17 ? false : undefined
      }
      userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
    />
  )
}

export default AudioBroadcast
