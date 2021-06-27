import {NextPage} from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <div className="cover">
        <img src="/logo.png" alt=""/>
        <h1>Nat 的个人博客</h1>
        <p>记录学习的点滴</p>
        <p><Link href="/posts"><a>文章列表</a></Link></p>
      </div>
      <style jsx>{`
      .cover{
        height: 100vh;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .cover > img{
        width: 200px; 
        height: 160px;
      }
      `}</style>
    </>
  );
};

export default Home;