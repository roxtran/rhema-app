import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import SearchBar from '../../components/common/SearchBar'
import NewVideo from '../../components/NewVideo'
import VideoList from '../../components/VideosList'
// import useYouTube from '../../hooks/useYouTube'
import { popularVideos, recentVideos } from '../../data/VideoData'

const VideoScreen = ({ navigation }) => {
  // console.log(navigation)
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  // const [searchVideos, results, errorMessage, popularVideos, recentVideos] =
  //   useYouTube()

  // console.log(popularVideos)
  // console.log(recentVideos)

  // const navigation = useNavigation()

  const allVideos = [...popularVideos, ...recentVideos]

  const searchVideos = (term) => {
    const resultVideos = allVideos.filter((video) =>
      video.snippet.title.toLowerCase().includes(term.toLowerCase())
    )
    setResults(resultVideos)
  }

  return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onCancel={() => setTerm('')}
        onTermSubmit={() => searchVideos(term)}
      />
      {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}

      <ScrollView nestedScrollEnabled>
        {!results || term === '' ? (
          <>
            <NewVideo
              videoId='FY2pEqb5GH8'
              title='THE STORM - PART 1 LEARNING THE STORMS'
              description='The Rhema Experience Online'
              publishedAt='2021-03-07'
              imageUrl='https://j.gifs.com/BNz5y2.gif'
              navigation={navigation}
            />
            <VideoList
              horizontal={true}
              title='Popular Sermons'
              videos={popularVideos}
              navigation={navigation}
            />
            <VideoList
              horizontal={true}
              title='Recent Sermons'
              videos={recentVideos}
              navigation={navigation}
            />
          </>
        ) : (
          <>
            {
              <VideoList
                horizontal={false}
                title='Search Results'
                videos={results}
                navigation={navigation}
              />
            }
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default VideoScreen
