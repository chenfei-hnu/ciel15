import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

function Transportation() {
  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Transportation - 交通</div>
        <div className={styles.content}>
        </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Transportation);
