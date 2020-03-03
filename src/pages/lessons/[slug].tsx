import { NextPage } from 'next'
import matter from 'gray-matter'
import Markdown from 'react-markdown'
import CodeBlock from '../../components/code-block'

const LessonTemplate: NextPage = ({ data }: any) => {
  return (
    <Markdown
      className="markdown-body"
      source={data.content}
      renderers={{ code: CodeBlock }}
    />
  )
}

LessonTemplate.getInitialProps = async ({ query }) => {
  const { slug } = query

  const content = await import(`../../lessons/${slug}.md`)

  const data = matter(content.default)

  return { data }
}

export default LessonTemplate
