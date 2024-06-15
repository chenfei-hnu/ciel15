import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

function Contact() {
  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Contact - 联系</div>
        <div className={styles.content}>
          <div className={styles.listTitle}>会务组：</div>
          <ul className={styles.mt20}>
            <li>
              会务执行主席：朱  敏（18291849054）
            </li>
            <li>
              文案组：姜雨辰（18273128651）
            </li>
            <li>
              宣传组：张  瑜（18890077035）
            </li>
            <li>
              财务组：匡  晨（15274656369）
            </li>
            <li>
              会务组：董龙杰（18702043089）
            </li>
            <li>
              后勤组：王  瑾（19974852395）、叶  子（13308367346）
            </li>
            <li>
              接待组：聂煜妍（16680801204）、毛  宁（13507300997）
            </li>
          </ul>

          <div className={styles.listTitle}>湖南大学外国语学院</div>
          <ul className={styles.mt20} >
            <li>
              地 址：湖南省长沙市岳麓区麓山南路2号
            </li>
            <li>
              邮 编：410082
            </li>
            <li>
              电 话：0731-88821135
            </li>
            <li>
              会议电子邮箱：ciel15hnu@gmail.com
            </li>
            <li>
              会议主页：http://www.ciel-15.com
            </li>
          </ul>
          

          <div className={styles.listTitle}>Committee</div>
          <ul className={styles.mt20}>
            <li>
            Executive Chairman:  ZHU Min (+86 182-9184-9054)
            </li>
            <li>
            Copywriter: JIANG Yuchen (+86 182-7312-8651)
            </li>
            <li>
            Public Relation: ZHANG Yu (+86 188-9007-7035)
            </li>
            <li>
            Finance: KUANG Chen (+86 152-7465-6369)
            </li>
            <li>
            Organizing: DONG Longjie (+86 187-0204-3089)
            </li>
            <li>
            Logistics: WANG Jin (+86 199-7485-2395), YE Zi (+86 133-0836-7346)
            </li>
            <li>
            Reception: NIE Yuyan (+86 166-8080-1204), MAO Ning (+86 135-0730-0997)
            </li>
          </ul>

          <div className={styles.listTitle}>School of Foreign Languages, Hunan University</div>
          <ul className={styles.mt20} >
            <li>
            Address: Lushan Road (S), Yuelu District, Changsha, Hunan Province
            </li>
            <li>
            Zip Code: 410082
            </li>
            <li>
            Telephone: 0731-88821135
            </li>
            <li>
            Email: ciel15hnu@gmail.com
            </li>
            <li>
            Website: http://www.ciel-15.com/
            </li>
          </ul>
        </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Contact);
