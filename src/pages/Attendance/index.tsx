import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

function Attendance() {

  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Attendance - 与会确认</div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Attendance);
