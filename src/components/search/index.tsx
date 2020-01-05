import React, { useState,useEffect,Fragment } from 'react'
import { useStaticQuery,graphql,Link } from 'gatsby';
import Fuse from 'fuse.js'
import style from './index.module.scss';
import { Icon } from "antd"


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
  const allPost = nodes.map((node: any) => {
    const { frontmatter: {date,description,title }, rawBody,fields: { slug } } = node;
    return { date,description,title,rawBody,path: `/blog${slug}` }
  });
  const [search,setSearch] = useState({} as any)
  const [query,setQuery] = useState('');
  const [searchResult,setSearchResult] = useState([]);
  useEffect(()=>{
    const options = {
      findAllMatches: true,
      includeMatches: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "title",
        "rawBody"
      ]
    }
    const search = new Fuse(allPost, options);
    setSearch(search);
  },[])
  const onInputChange = (e: any) => {
    const query = e.target.value;
    setQuery(query);
    const searchResult: [] = search.search(e.target.value);
    setSearchResult(searchResult)
  }
  const heightLight = (str: string) => {
    return str.replace(new RegExp(`(${query})`, 'gi'), `<span style="color: red">$1</span>`);
  }

  const getContent = (str: string) => {
    const length = 200;
    if(str.indexOf(query) === -1){
      return str.substring(0,length);
    }else{
      return str.substring(str.indexOf(query),str.indexOf(query) + length).replace(new RegExp(`(${query})`, 'gi'), `<span style="color: red">$1</span>`);
    }
  }

  return (
    <div>
      <div className={style.search}>
        <input value={query} onChange={onInputChange} />
        <div className={style.button}>
          <Icon className={style.icon} type="search"/>
        </div>
      </div>
      <ol className={style.resultList}>
        {
          searchResult.map(({ item } : any,index) => (
            <Link key={index} to={item.path}>
              <h5 dangerouslySetInnerHTML={{ __html: heightLight(item.title) }}/>
              <div className={style.border} dangerouslySetInnerHTML={{ __html: getContent(item.rawBody) }} />
            </Link>
          ))
        }
      </ol>
    </div>
  )
}