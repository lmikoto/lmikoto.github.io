import React, { useState,useEffect } from 'react'
import { useStaticQuery,graphql } from 'gatsby';
import * as JsSearch from 'js-search'
import { Fragment } from 'react-is/cjs/react-is.development';

export default () => {
  const { allMdx: { nodes } } = useStaticQuery(graphql`
    query{
      allMdx {
        nodes {
          frontmatter {
            date
            description
            title
          }
          rawBody
          fields{
            slug
          }
        }
      }
    }
  `)
  const allPost = nodes.map(node => {
    const { frontmatter: {date,description,title }, rawBody,fields: { slug } } = node;
    return { date,description,title,rawBody,slug }
  });
  const [search,setSearch] = useState(null)
  const [query,setQuery] = useState('');
  const [searchResult,setSearchResult] = useState([]);
  useEffect(()=>{
    const search = new JsSearch.Search('slug');
    search.addIndex('date');
    search.addIndex('description');
    search.addIndex('title');
    search.addIndex('rawBody');
    search.addDocuments(allPost);
    setSearch(search);
  },[])
  const onInputChange = (e) => {
    setQuery(e.target.value);
    setSearchResult(search.search(e.target.value))
  }
  return (
    <div>
       <input value={query} onChange={onInputChange} />
        <ol>
          {
            searchResult.map((result,index) => (
              <Fragment key={index}>
                <div>{result.date}</div>
                <div>{result.title}</div>
              </Fragment>
            ))
          }
        </ol>
    </div>
  )
}