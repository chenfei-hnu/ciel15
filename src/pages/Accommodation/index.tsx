import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';
import hotel1 from '../../asset/hotel1.jpg';
import hotel2 from '../../asset/hotel2.jpg';

function Accommodation() {
  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Accommodation - 住宿</div>
        <div className={styles.content}>
          <div className={styles.listTitle}>会议推荐酒店介绍</div>
          <div className={styles.listTitle}>集贤宾馆</div>
          <p className={styles.mt20}>
          位置：湖南大学岳麓书院旁，距会议报告地点（逸夫楼、复临舍）约700m，步行8分钟。
          </p>
          <p>
          附近的景点或商圈：靠近岳麓书院，可随时感受书院的书香气息；在岳麓山脚下，爬岳麓山很方便；靠近东方红广场，可随时与毛爷爷伟岸雕塑合照；靠近登高路小吃街。
          </p>
          <p>
          交通：距湖南大学地铁站488米。
          </p>
          <p className={styles.imgCenter}>
            <img src={hotel1}/>
          </p>

          <div className={styles.listTitle}>麓枫酒店</div>
          <p className={styles.mt20}>
          位置：麓山南路渔湾码头时尚商业广场一楼，距会议报告地点（逸夫楼、复临舍）约1.2km，步行12分钟。
          </p>
          <p>
          附近的景点或商圈：在麓山南路和与阜埠河路交汇处，可随时体验两条路大学生最喜爱的美食；在湖南大学南校区和湖南师范大学中间，可以感受两所大学的校园氛围；地处商圈，热闹、购物便捷。
          </p>
          <p>
          交通：距阜埠河地铁站约550米。
          </p>
          <p className={styles.imgCenter}>
            <img src={hotel2}/>
          </p>
          

          <div className={styles.listTitle}>Recommended Hotels for the Conference</div>
          <div className={styles.listTitle}>Jixian Hotel</div>
          <p className={styles.mt20}>
          Location：Adjacent to Yuelu Academy at Hunan University, approximately 700 meters from the conference venues (Yifu Building and Fulin Building), an 8-minute walk.
          </p>
          <p>
          Spots and commercial areas: Close to Yuelu Academy, where you can immerse yourself in the scholarly atmosphere at any time; located at the foot of Yuelu Mountain, making it convenient to climb the mountain; near Dongfanghong Square, where you can take photos with the majestic statue of Chairman Mao; close to Denggao Road snack street for local delicacies. 
          </p>
          <p>
          Transportation: 488 meters from Hunan University Metro Station.
          </p>
          <p className={styles.imgCenter}>
            <img src={hotel1}/>
          </p>

          <div className={styles.listTitle}>Lufeng Hotel</div>
          <p className={styles.mt20}>
          Location：First floor of the Fashion Commercial Plaza at Yuwan Matou on Lushan South Road , approximately 1.2 kilometers from the conference venues (Yifu Building and Fulin Building), a 12-minute walk.
          </p>
          <p>
          Spots and commercial areas: Situated at the intersection of Lushan South Road and Fubuhe Road, this location offers easy access to the favorite eateries of university students; positioned between the Hunan University and Hunan Normal University, enabling visitors to experience the campus atmospheres of both universities; located in a bustling commercial district, providing convenient shopping options.
          </p>
          <p>
          Transportation: 550 meters from Fubuhe Metro Station.
          </p>
          <p className={styles.imgCenter}>
            <img src={hotel2}/>
          </p>
        </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Accommodation);
