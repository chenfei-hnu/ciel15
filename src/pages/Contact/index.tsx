import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

function Contact() {
  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Contact - 联系</div>
        <div className={styles.content}>
        </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Contact);
