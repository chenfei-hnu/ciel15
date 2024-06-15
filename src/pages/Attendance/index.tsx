import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';
import attendance1 from '../../asset/attendance1.jpg';
import attendance2 from '../../asset/attendance2.jpg';

function Attendance() {

  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Attendance - 与会确认</div>
      <div className={styles.content}>
          <div className={styles.listTitle}>一、汇报人员</div>
          <p className={styles.mt20}>
          因会务安排需要，请每位投稿的参会人员填写以下参会回执<b>（扫描下方二维码下载，参会人员均需提交）</b>，并发送至会议邮箱<a href="mailto:ciel15hnu@gmail.com">ciel15hnu@gmail.com</a>。
          </p>
          <p className={styles.imgCenter}>
            <img src={attendance1}/>
          </p>
          <p>
          另悉，6月10日前收到的所有投稿均已审核并发出正式邀请，有多位作者的研究统一向汇报人发送一封邀请函邮件；请参会人员注意查收，并加入微信群等待后续通知；未提交参会回执的参会人员请在6月25日前提交，以便后续安排。
          </p>
        
        <div className={styles.listTitle}>二、旁听人员</div>
          <p className={styles.mt20}>
          本次会议接受旁听报名，旁听人员只需缴纳会务费，无需提交摘要，也不再安排汇报。
          </p>
          <p>
          有意旁听者请于6月25日前填写报名链接(<a href="https://www.wjx.top/vm/wkc2hqL.aspx#">https://www.wjx.top/vm/wkc2hqL.aspx#</a>)或扫描下方二维码在线报名，通过报名审核后，会务专家组将在五个工作日内通过邮箱发出正式参会通知和会议具体安排。
          </p>
          <p className={styles.imgCenter}>
            <img src={attendance2}/>
          </p>
          <p>
          （注：由于旁听席位与场地限制，校外报名人数限定为60人，先到先得。如未能满足您的报名需求，敬请谅解！）
          </p>

          <div className={styles.listTitle}>I.	For participants who have submitted abstracts:</div>
          <p className={styles.mt20}>
          Due to the needs of conference affairs and logistics, participants who have submitted their abstracts are kindly requested to fill out the following receipt form and send it to the conference email at <a href="mailto:ciel15hnu@gmail.com">ciel15hnu@gmail.com</a>.
          </p>
          <p className={styles.imgCenter}>
            <img src={attendance1}/>
          </p>
          <p>
          Please note that all submissions received before June 10th have been reviewed and an official invitation has been issued. For research with multiple authors, we only sent one invitation email to the presenter. Attendees are advised to check and join the WeChat group for further notification. Participants who have not submitted their attendance receipts should submit them before June 25th for future arrangements.
          </p>

        
        <div className={styles.listTitle}>II.	For audiences</div>
          <p className={styles.mt20}>
          Audiences are also welcome to this conference. 
          </p>
          <p>
          They are only required to pay the registration fee and do not need to submit an abstract or present at the conference. If you are interested, please fill out the registration link before June 25th. After reviewed, we will send a formal email of attendance as well as specific arrangements for the conference within five working days.
          </p>
          <p>
          (Note: Due to seat and venue limitations, the number of audiences is limited to 60, on a first come, first served basis. If your registration request cannot be accommodated, we appreciate your understanding.)
          </p>
          <p>
          Registration link: If we are unable to accommodate your registration request, we appreciate your understanding.
          </p>
          <p>
          QR code: 
          </p>
          <p className={styles.imgCenter}>
            <img src={attendance2}/>
          </p>
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Attendance);
