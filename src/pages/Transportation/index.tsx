import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';
import map from '../../asset/map.jpg';
import enMap from '../../asset/enMap.jpg';
import { Table, Image, Row, Card, Col } from 'antd';

function Transportation() {
  const isSmallScreen = window.innerWidth < 1024
  const desArr = isSmallScreen ? [] : [{
    title: '终点',
    key: 'des',
    dataIndex: 'des',
    width: '25%',
    align: 'center',
    render: (text, record, index) => {
      const previousRow = trafficData[index - 1];
      let nextRow = trafficData[index + 1];
      
      let rowSpan = 1;
      if (previousRow && previousRow.des === text) {
        return {
          children: text,
          props: {
            rowSpan: 0,
          },
        };
      }
      while (nextRow && nextRow.des === text) {
        rowSpan++;
        index++;
        nextRow = trafficData[index + 1];
      }
      
      return {
        children: text,
        props: {
          rowSpan,
        },
      };
    },
  }]
  const trafficColumns = [
    ...desArr,
    {
      title: '起点',
      dataIndex: 'start',
      key: 'start',
      width: '25%',
      align: 'center',
      render: (text, record, index) => {
        const previousRow = trafficData[index - 1];
        let nextRow = trafficData[index + 1];
        
        let rowSpan = 1;
        if (previousRow && previousRow.start === text) {
          return {
            children: text,
            props: {
              rowSpan: 0,
            },
          };
        }
        while (nextRow && nextRow.start === text) {
          rowSpan++;
          index++;
          nextRow = trafficData[index + 1];
        }
        
        return {
          children: text,
          props: {
            rowSpan,
          },
        };
      },
    },
    {
      title: '交通工具',
      dataIndex: 'way',
      key: 'way',
      width: '25%',
      align: 'center',
    },
    {
      title: '路线及时长',
      dataIndex: 'time',
      key: 'time',
      width: '25%',
      align: 'center',
      render: (text) => <span dangerouslySetInnerHTML={{ __html: text }} />,
    }
  ]
  
  const trafficData = [
    {
      des: '湖南大学南校区',
      start: '长沙黄花机场',
      way: '出租车',
      time: '预计花费 95-110 元</br>约 1.25 小时'
    },
    {
      des: '湖南大学南校区',
      start: '长沙黄花机场',
      way: '地铁',
      time: '6号线黄花机场站 - 6号线六沟垅站換乘 - 4号线湖南大学站</br>约 1.25 小时'
    },
    {
      des: '湖南大学南校区',
      start: '长沙黄花机场',
      way: '磁浮快线',
      time: '磁浮快线机场站 - 磁浮快线高铁站换乘 - 4号线湖南大学站</br>约 1.25 小时'
    },
    {
      des: '湖南大学南校区',
      start: '长沙高铁南站',
      way: '出租车',
      time: '预计花费 45-60 元，时长</br>约 50 分钟'
    },
    {
      des: '湖南大学南校区',
      start: '长沙高铁南站',
      way: '地铁',
      time: '4号线长沙火车南站 - 4号线湖南大学站</br>约 40 分钟'
    },
    {
      des: '湖南大学南校区',
      start: '长沙火车站',
      way: '出租车',
      time: '预计花费 20-30 元，时长</br>约 30分钟'
    },
    {
      des: '湖南大学南校区',
      start: '长沙火车站',
      way: '地铁',
      time: '2号线长沙火车站 - 2号线溁湾镇站换乘 - 4号线湖南大学站时长</br>约 30 分钟'
    },
    {
      des: '湖南大学南校区',
      start: '长沙火车站',
      way: '公交车',
      time: '立珊专线:长沙火车站一湖南大学地铁站</br>约 30 分钟'
    },
  ]

  const enDesArr = isSmallScreen ? [] : [{
    title: 'To',
      key: 'des',
      dataIndex: 'des',
      width: '25%',
      align: 'center',
      render: (text, record, index) => {
        const previousRow = enTrafficData[index - 1];
        let nextRow = enTrafficData[index + 1];
        
        let rowSpan = 1;
        if (previousRow && previousRow.des === text) {
          return {
            children: text,
            props: {
              rowSpan: 0,
            },
          };
        }
        while (nextRow && nextRow.des === text) {
          rowSpan++;
          index++;
          nextRow = enTrafficData[index + 1];
        }
        
        return {
          children: text,
          props: {
            rowSpan,
          },
        };
    }
  }]

  const enTrafficColumns = [
    ...enDesArr,
    {
      title: 'From',
      dataIndex: 'start',
      key: 'start',
      width: '25%',
      align: 'center',
      render: (text, record, index) => {
        const previousRow = enTrafficData[index - 1];
        let nextRow = enTrafficData[index + 1];
        
        let rowSpan = 1;
        if (previousRow && previousRow.start === text) {
          return {
            children: text,
            props: {
              rowSpan: 0,
            },
          };
        }
        while (nextRow && nextRow.start === text) {
          rowSpan++;
          index++;
          nextRow = enTrafficData[index + 1];
        }
        
        return {
          children: text,
          props: {
            rowSpan,
          },
        };
      },
    },
    {
      title: 'Transport',
      dataIndex: 'way',
      key: 'way',
      width: '25%',
      align: 'center',
    },
    {
      title: 'Route & Spend',
      dataIndex: 'time',
      key: 'time',
      width: '25%',
      align: 'center',
      render: (text) => <span dangerouslySetInnerHTML={{ __html: text }} />,
    }
  ]
  
  const enTrafficData = [
    {
      des: 'Hunan University',
      start: 'Changsha Huanghua International Airport',
      way: 'Taxi',
      time: '￥95-110 </br>1.25 hours'
    },
    {
      des: 'Hunan University',
      start: 'Changsha Huanghua International Airport',
      way: 'Metro',
      time: 'Huanghua Airport T1 & T2 (Line 6) → Liugoulong (Line 6) → Hunan University (Line 4) </br>1.25 hours'
    },
    {
      des: 'Hunan University',
      start: 'Changshanan Railway Station',
      way: 'Taxi',
      time: '￥45-60 </br>50 minutes'
    },
    {
      des: 'Hunan University',
      start: 'Changshanan Railway Station',
      way: 'Metro',
      time: 'South Railway Station (Line 4) → Hunan University (Line 4) </br>40 minutes'
    },
    {
      des: 'Hunan University',
      start: 'Changsha Railway Station',
      way: 'Taxi',
      time: '￥20-30 </br>30 minutes'
    },
    {
      des: 'Hunan University',
      start: 'Changsha Railway Station',
      way: 'Metro',
      time: 'Railway Station (Line 2) → Yingwanzhen (Line 2) → Hunan University (Line 4) </br>30 minutes'
    },
    {
      des: 'Hunan University',
      start: 'Changsha Railway Station',
      way: 'Bus',
      time: 'Lishan Special Line: Changsha Railway Station </br>30 minutes'
    },
  ]

  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Transportation - 交通</div>
        <div className={styles.content}>
          <div className={styles.listTitle}>（1）会议地点</div>
          <p className={styles.mt20}>
          主旨报告：湖南大学逸夫楼 主报告厅
          </p>
          <p>
          口头汇报：复临舍201、203、204、208、209
          </p>
          <p>
          海报展示：复临舍大厅
          </p>
          <p className={styles.imgCenter}>
            <img src={map}/>
          </p>
          <p className={styles.imgCenter}>
            湖南大学校园地图
          </p>
          <div className={styles.listTitle}>（2）交通方式</div>
          <Table pagination={false} columns={trafficColumns} className={styles.table} showHeader={true}
          dataSource={trafficData} />

          <div className={styles.listTitle}>（1）Conference Places</div>
          <p className={styles.mt20}>
            Keynote Speech: Yifu Building
          </p>
          <p>
            Oral Presentation: Room 201, 203, 204, 208, 209 at Fulinshe Teaching Building
          </p>
          <p>
            Post: Fulinshe Teaching Building
          </p>
          <p className={styles.imgCenter}>
            <img src={enMap}/>
          </p>
          <p className={styles.imgCenter}>
            Routine Map at Hunan University
          </p>
          <div className={styles.listTitle}>（2）Transportation</div>
          <Table pagination={false} columns={enTrafficColumns} className={styles.table} showHeader={true}
          dataSource={enTrafficData} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Transportation);
