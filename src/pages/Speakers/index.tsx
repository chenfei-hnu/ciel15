import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

function Speakers() {
  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Speakers - 主题报告</div>
        <div className={styles.content}>
        </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Speakers);
