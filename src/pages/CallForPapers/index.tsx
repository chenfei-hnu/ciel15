import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

function CallForPapers() {
  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Call for Papers - 征稿</div>
        <div className={styles.content}>
          <p>
          The 15th International Conference in Evolutionary Linguistics (CIEL-15) will be held during July 12-14, 2024 at Hunan University. CIEL-15 will be held by School of Foreign Languages, Hunan University, and co-organized by the Shenzhen Institute of Neuroscience.
          </p>
          <p>
          CIEL-15 will invite scholars of representative and influential figures in the relevant fields from both domestic and international arenas to deliver keynote speeches. We cordially invite all scholars to attend, and kindly request that the titles and abstracts (approximately 400-800 words) of the papers to be presented at the conference be submitted in Word format to ciel15hnu@gmail.com by May 1, 2024. The official invitation letter will be issued before May 31, 2024. The working languages of CIEL-15 are Mandarin and English.
          </p>
          <div className={styles.listTitle}>Conference topics may include the following:</div>
          <ul>
            <li>
              1.	The proto-language of Chinese and other languages;
            </li>
            <li>
              2.	Language development in typical and atypical populations;
            </li>
            <li>
              3.	Ageing and language degradation;
            </li>
            <li>
              4.	The (co)evolution of language and music;
            </li>
            <li>
              5.	Language, cognition, and the brain;
            </li>
            <li>
              6.	Dialect formation and evolution;
            </li>
            <li>
              7.	Diachronic and synchronic study of language;
            </li>
            <li>
              8.	Evolution of large language model;
            </li>
            <li>
              9.	Other language-related research.
            </li>
          </ul>
          <div className={styles.listTitle}>Conference Organization:</div>
          <ul>
            <li>
              1.	Honorary Chair: WANG S-Y.William
            </li>
            <li>
              2.	Organizing Committee: CHEN Fei, PENG Gang, TAN Lihai
            </li>
            <li>
              3.	Email: ciel15hnu@gmail.com
            </li>
            <li>
              4.	Conference Website: http://www.ciel-15.com
            </li>
          </ul>
        </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(CallForPapers);
