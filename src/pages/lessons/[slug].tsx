import { NextPage } from 'next'
import Error from 'next/error'
import matter from 'gray-matter'
import Markdown from 'react-markdown'
import { CodeBlock } from '../../components'
import { LessonTemplateContainer } from './lessons.styles'

interface LessonTemplateProps {
  data: { title: string; description: string }
  content: string
  isEmpty: boolean
}

const LessonTemplate: NextPage<LessonTemplateProps> = ({ data, content }) => {
  return !data ? (
    <Error statusCode={404} />
  ) : (
    <LessonTemplateContainer>
      <Markdown
        className="markdown-body"
        source={content}
        renderers={{ code: CodeBlock }}
      />
    </LessonTemplateContainer>
  )
}

LessonTemplate.getInitialProps = async ({ query }) => {
  const { slug } = query
  let data

  try {
    const content = await import(`../../lessons/${slug}.md`)
    data = matter(content.default)
  } catch (error) {
    console.error(error)
  }

  return { ...data }
}

export default LessonTemplate
