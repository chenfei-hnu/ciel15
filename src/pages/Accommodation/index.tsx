import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

function Accommodation() {
  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Accommodation - 住宿</div>
        <div className={styles.content}>
        </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Accommodation);
