import hljs from 'highlight.js';
import { useEffect } from 'react';
import markdownStyles from '../styles/markdown-styles.module.css';

type Props = {
  content: string
}

export default function PostBody({ content }: Props) {
  useEffect(() => {
    hljs.highlightAll();
    hljs.configure({ ignoreUnescapedHTML: true });
  }, []);
  return (
    <div className="max-w-4xl mx-auto mb-10">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
