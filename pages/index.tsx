import {GetServerSideProps, NextPage} from 'next';
import {UAParser} from 'ua-parser-js';
import {useEffect, useState} from 'react';
import { getDatabaseConnection } from 'lib/getDatabaseConnection';
import { Post } from '../src/entity/Post';
import Link from 'next/link';

type Props = {
  browser: {
    posts: Post[],

  }
}
const index: NextPage<Props> = (props) => {
  const { posts } = props;
  return (
    <div>
      <h1>文章列表</h1>
      { posts.map(post =>
          <Link key={post.id} href={`/posts/${post.id}`}>
            <a>{ post.title }</a>
          </Link>
        )
      }
    </div>
  )
};
export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const connection = await getDatabaseConnection();
  const posts = await connection.manager.find(Post);
  const ua = context.req.headers['user-agent'];
  const result = new UAParser(ua).getResult();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
};
