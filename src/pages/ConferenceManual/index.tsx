import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

function Contact() {
  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>ConferenceManual - 会议资料</div>
      <div className={styles.pdfWrap}>
        <a href="https://chenfei-1300076408.cos.ap-guangzhou.myqcloud.com/CIEL15_Abstract.pdf" download="CIEL15_Abstract.pf" target="_blank">下载会议手册(Conference Manual)</a>
        <a href="https://chenfei-1300076408.cos.ap-guangzhou.myqcloud.com/CIEL15_Manual.pdf" download="CIEL15_Manual.pdf" target="_blank">下载摘要汇编(Conference Abstract)</a>
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Contact);
