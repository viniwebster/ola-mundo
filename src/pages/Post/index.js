import './Post.css'
import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'components/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Post() {
  const paramentros = useParams();
  const post = posts.find(post => post.id === Number(paramentros.id));

  if (!post){
    return <NotFound />
  }

  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route index element={
          <PostModelo
          fotoCapa={`/assets/posts/${post.id}/capa.png`}
          titulo={post.titulo}
          >
          <div className='post-markdown-container'>
              <ReactMarkdown>
                  {post.texto}
              </ReactMarkdown>
          </div>
          </PostModelo>
        }/>
      </Route>
    </Routes>
  )
}
