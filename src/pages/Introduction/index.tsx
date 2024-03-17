import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

function ResearchDirection() {
  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Introduction - 会议简介</div>
        <div className={styles.content}>
          <p>
          以新文科倡导的跨学科视野，演化语言学与人类学、考古学、生物学、语言学、神经科学、心理学和计算机科学等学科交叉共融。演化语言学国际研讨会（International Conference in Evolutionary Linguistics, CIEL）是由国际著名语言学家王士元教授首倡的，至今已经在海内外多所著名高校成功举办了14届，以往在广州（2009年）、天津（2010年、2015年）、上海（2011年、2019年）、北京（2012年）、厦门（2014年）、美国印第安纳州（2016年）、昆明（2017年）、南京（2018年）、兰州（2021年）、济南（2022年）和香港（2013年、2023年）分别成功举办。演化语言学国际研讨会旨在展示语言学的新交叉视野，倡导新的研究手段方法，为相关领域的海内外学者们提供跨学科国际交流合作机会，共同推动演化语言学研究的进步。
          </p>
          <p>
          From an interdisciplinary perspective, evolutionary linguistics interacts with anthropology, archeology, biology, linguistics, neuroscience, psychology, and computer science. Collaborative empirical research among these areas will make new contributions to evolutionary linguistics, both in breadth and depth. The International Conference in Evolutionary Linguistics (CIEL) was initiated by Professor WANG S-Y. William. Through CIEL, we wish to promote international interaction and boost interdisciplinary collaborations. Previous CIEL conferences in Guangzhou (2009), Tianjin (2010, 2015), Shanghai (2011, 2019), Beijing (2012), Xiamen (2014), Indiana USA (2016), Kunming (2017), Nanjing (2018), Lanzhou (2021), Jinan (2022), and Hong Kong (2013, 2023) were all held in the same spirit.
          </p>
        </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(ResearchDirection);
