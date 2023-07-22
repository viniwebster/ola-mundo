import './Post.css'
import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'components/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';
import PostCard from 'components/PostCard';

export default function Post() {
  const paramentros = useParams();
  const post = posts.find(post => post.id === Number(paramentros.id));
  const recomendados = posts.filter(item => item !== post);
  const recomendadosFiltrados = recomendados.slice(0, 4);

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
          <div>
            <h2 className='titulo-recomendados'>Outros posts que voce pode gostar </h2>
            <ul className='recomendados'>
              {recomendadosFiltrados.map(item =><li>  <PostCard post={item}/> </li>)} 
            </ul>
          </div>
          </PostModelo>
        }/>
      </Route>
    </Routes>
  )
}
