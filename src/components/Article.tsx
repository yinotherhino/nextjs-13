import Link from 'next/link'
import React from 'react'

const Article = ({article}:any) => {
  return (
    <div>
        <h3>
            {article.title}
        </h3>
        <p>
            {article.body}
        </p>
        <span>user id:{article.userId}</span><span><Link href='/post[id]' as={`/post/${article.id}`}>more</Link></span>
    </div>
  )
}

export default Article