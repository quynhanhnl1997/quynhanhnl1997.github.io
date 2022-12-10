import markdownStyles from '../styles/markdown-styles.module.css';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-4xl mx-auto mb-10">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody