import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

function CallForPapers() {
  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Call for Papers - 征稿</div>
        <div className={styles.content}>
          <p className={styles.mainTitle}>
            第十五届演化语言学国际研讨会 (CIEL-15)
          </p>
          <p className={styles.mainTitle}>
            一号通知
          </p>
          <p className={styles.mainTitle}>
            The 15th International Conference in Evolutionary Linguistics
          </p>
          <p className={styles.mainTitle}>
            (Notice No.1 of CIEL-15)
          </p>
          <div className={styles.clear}></div>
          <p>
          第十五届演化语言学国际研讨会（CIEL-15）将于2024年7月12日至14日在湖南大学举行，由湖南大学外国语学院主办，深圳市神经科学研究院协办。
          </p>
          <p>
          The 15th International Conference in Evolutionary Linguistics (CIEL-15) will be held during July 12-14, 2024 at Hunan University. CIEL-15 will be held by School of Foreign Languages, Hunan University, and co-organized by the Shenzhen Institute of Neuroscience.
          </p>
          <p>
          会议将邀请国内外相关领域有代表性和影响力的学者做大会的主题报告。今恭邀各位学者同道拔冗参会，并敬请于2024年5月1日前将参会论文题目及摘要（约400—800字）以word格式发送至ciel15hnu@gmail.com。会议正式邀请函将于2024年5月31日前发出。研讨会学术语言为汉语普通话和英语。
          </p>
          <p>
          CIEL-15 will invite scholars of representative and influential figures in the relevant fields from both domestic and international arenas to deliver keynote speeches. We cordially invite all scholars to attend, and kindly request that the titles and abstracts (approximately 400-800 words) of the papers to be presented at the conference be submitted in Word format to ciel15hnu@gmail.com by May 1, 2024. The official invitation letter will be issued before May 31, 2024. The working languages of CIEL-15 are Mandarin and English.
          </p>
          <div className={styles.listTitle}>会议议题</div>
          <ul>
            <li>
            （1）汉语及其他语言的祖先；
            </li>
            <li>
            （2）典型和非典型人群的语言发展;
            </li>
            <li>
            （3）老龄化与语言退化；
            </li>
            <li>
            （4）音乐与语言演化;
            </li>
            <li>
            （5）语言、认知与大脑；
            </li>
            <li>
            （6）方言的形成与演化；
            </li>
            <li>
            （7）语言的共时与历时研究；
            </li>
            <li>
            （8）大型语言模型的发展与演化；
            </li>
            <li>
            （9）其他语言相关的议题
            </li>
          </ul>
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
          <div className={styles.listTitle}>会议组织</div>
          <ul>
            <li>
            （1）研讨会名誉主席：王士元
            </li>
            <li>
            （2）主席团：陈飞、彭刚、谭力海
            </li>
            <li>
            （3）电子邮箱：ciel15hnu@gmail.com
            </li>
            <li>
            （4）会议主页：http://www.ciel-15.com
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
