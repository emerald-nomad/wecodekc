import { NextPage } from 'next'
import { IndexContainer, Image } from './index.styles'

const Home: NextPage = () => {
  return (
    <IndexContainer>
      <Image
        src="http://wecodekc.org/wp-content/uploads/2020/01/WeCodeKCEventbrite.jpg"
        alt="Banner Image"
      />
      <p>
        WeCodeKC is fiscally sponsored by Learn Techquity, LLC a 501 c3
        organization
      </p>
    </IndexContainer>
  )
}

export default Home
