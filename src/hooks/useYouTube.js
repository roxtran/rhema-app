import { CHANNEL_ID, YOUTUBE_API_KEY } from '@env'
import { useEffect, useState } from 'react'
import youtube from '../api/youtube'

export default () => {
  const [results, setResults] = useState([])
  const [popularVideos, setPopularVideos] = useState([])
  const [recentVideos, setRecentVideos] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchVideos = async (searchTerm) => {
    console.log('Search is called!')
    try {
      const response = await youtube.get('/search', {
        params: {
          key: YOUTUBE_API_KEY,
          channelId: CHANNEL_ID,
          part: 'snippet',
          maxResults: 10,
          q: searchTerm,
          order: 'date',
        },
      })
      setResults(response.data.items)
      // console.log(results)
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  const getPopularVideos = async (searchTerm) => {
    console.log('getPopularVideos is called!')
    try {
      const response = await youtube.get('/search', {
        params: {
          key: YOUTUBE_API_KEY,
          channelId: CHANNEL_ID,
          part: 'snippet',
          maxResults: 10,
          q: searchTerm,
          order: 'viewCount',
          publishedAfter: '2021-01-01T00:00:00Z',
        },
      })
      setPopularVideos(response.data.items)
    } catch (err) {
      setErrorMessage('Cannot find popular videos')
    }
  }

  const getRecentVideos = async (searchTerm) => {
    console.log('getPopularVideos is called!')
    try {
      const response = await youtube.get('/search', {
        params: {
          key: YOUTUBE_API_KEY,
          channelId: CHANNEL_ID,
          part: 'snippet',
          maxResults: 10,
          q: searchTerm,
          order: 'date',
          publishedAfter: '2021-01-01T00:00:00Z',
        },
      })
      setRecentVideos(response.data.items)
    } catch (err) {
      setErrorMessage('Cannot find recent videos')
    }
  }

  // const getPopularVideos = async () => {
  //   console.log('getPopularVideos is called!')
  //   try {
  //     const response = await youtube.get('/playlistItems', {
  //       params: {
  //         key: YOUTUBE_API_KEY,
  //         part: 'snippet',
  //         playlistId: POPULAR_PLAYLIST_ID,
  //         maxResults: 10
  //       }
  //     })
  //     setPopularVideos(response.data.items)
  //   } catch (err) {
  //     setErrorMessage('Cannot find popular videos')
  //   }
  // }

  // const getRecentVideos = async () => {
  //   console.log('getRecentVideos is called! ')
  //   try {
  //     const response = await youtube.get('/playlistItems', {
  //       params: {
  //         key: YOUTUBE_API_KEY,
  //         part: 'snippet',
  //         playlistId: RECENT_PLAYLIST_ID,
  //         maxResults: 10
  //       }
  //     })
  //     setRecentVideos(response.data.items)
  //   } catch (err) {
  //     setErrorMessage('Cannot find recent videos')
  //   }
  // }

  // Call functions when component
  // is first called.
  useEffect(() => {
    // searchVideos('')
    getPopularVideos()
    getRecentVideos()
  }, [])

  return [
    searchVideos,
    results,
    errorMessage,
    getPopularVideos,
    popularVideos,
    getRecentVideos,
    recentVideos,
  ]
}
