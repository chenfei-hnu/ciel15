import React, { useState, useEffect } from 'react';
import '../../../mock/homeApi';
import styles from './index.less';
import { connect } from 'react-redux';

interface INews {
  link: string;
  title: string;
  desc: string;
  time: string;
}

function Home() {
  useEffect(() => {
  }, []);

  const [news, setNews] = useState<INews[]>([]);

  return (
    <div className={styles.homeWrap}>
      <div className={styles.top}>
        <div className={styles.title}>
          <p>The 15th International Conference in Evolutionary Linguistics</p>
          <p>第15届演化语言学国际研讨会</p>
        </div>
        <div className={styles.date}>
          <p>Dates: July 12-14, 2024</p>
          <p>时间：2024年7月12日-14日</p>
        </div>
        <div className={styles.position}>
          <p>Venue：Hunan University</p>
          <p>地点：湖南大学</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Home);
