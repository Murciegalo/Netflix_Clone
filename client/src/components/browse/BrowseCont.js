import React, {useContext, useState, useEffect} from 'react'
import {FirebaseCntx} from '../../context/firebase'
import * as Routes from '../../routes/constants'
import logoSvg from '../../logo.svg'
import ProfileCont from '../profile/ProfileCont'
import Loading from '../Loading/Loading.js'
import Header from '../header/Header'
import Card from '../card/Card'
import Player from '../player/Player'
import FooterCont from '../footer/FooterCont'

export default function BrowseCont({slides}) {
  const [category, setCategory] = useState('series')
  const [search, setSearch] = useState('')
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const [slideRows, setSlideRows] = useState([])

  const {firebase} = useContext(FirebaseCntx)
  const user = firebase.auth().currentUser || {} 
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  } // eslint-disable-next-line
  , [profile.displayName])

  useEffect(() => {
    setSlideRows(slides[category])  
  }
  , [slides, category])
  
  const rendered = <>{loading ? 
    <Loading src={user.photoURL} />
    : 
    <Loading.ReleaseBody />}
    <Header src='joker1'feature={true}>
      <Header.Container>
        <Header.Group>
          <Header.Logo to={Routes.HOME} src={logoSvg} alt='Netflix'/>
          <Header.TextLink 
            active={category === 'series' ? 'true' : 'false'}
            onClick={() => setCategory('series')}
          >
            Series
          </Header.TextLink>
          <Header.TextLink
            active={category === 'films' ? 'true' : 'false'}
            onClick={() => setCategory('films')}
          >
            Films
          </Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.Search search={search} setSearch={setSearch}></Header.Search>
          <Header.Profile>
            <Header.Picture src={user.photoURL} />
            <Header.Dropdown>
              <Header.Group>
                <Header.Picture src={user.photoURL} />
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink 
                  onClick={() => firebase.auth().signOut() }
                >
                  Sign Out
                </Header.TextLink>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Group>
      </Header.Container>
      <Header.FeaturedText>Watch Joker Now</Header.FeaturedText>
      <Header.Text>Hello</Header.Text>
      <Header.PlayBtn>Play</Header.PlayBtn>
    </Header>
    <Card.Group>
      {slideRows.map(el => <Card key={`${category}-${el.title.toLowerCase()}`} >
        <Card.Title>{el.title}</Card.Title>
        <Card.Entities>{
          el.data.map(el => <Card.Item key={el.docId} item={el}>
            <Card.Image src={`/images/${category}/${el.genre}/${el.slug}/small.jpg`} />
            <Card.Meta>
              <Card.Subtitle>{el.title}</Card.Subtitle>
              <Card.Text>{el.description}</Card.Text>
            </Card.Meta>
          </Card.Item>
          )}
        </Card.Entities>
        <Card.Feature category={category}>
          <p>Hello</p>
        </Card.Feature> 
      </Card>)}
    </Card.Group>
    <FooterCont />
  </>


  return profile.displayName ? rendered
  : 
  <ProfileCont user={user} setProfile={setProfile} />;
}
