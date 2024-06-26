import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { connect } from 'react-redux';
import { Table, Image, Row, Card, Col } from 'antd';
import qrSrc from '../../asset/qr.png';
import db from '../../asset/reporter/db.jpg';
import dhw from '../../asset/reporter/dhw.jpg';
import dhy from '../../asset/reporter/dhy.jpg';
import fsl from '../../asset/reporter/fsl.jpg';
import grg from '../../asset/reporter/grg.jpg';
import hcs from '../../asset/reporter/hcs.jpg';
import kjp from '../../asset/reporter/kjp.jpg';
import pwy from '../../asset/reporter/pwy.jpg';
import sf from '../../asset/reporter/sf.jpg';
import wsy from '../../asset/reporter/wsy.jpg';
import yjh from '../../asset/reporter/yjh.jpg';
import yym from '../../asset/reporter/yym.jpg';
import zmh from '../../asset/reporter/zmh.jpg';
import zy from '../../asset/reporter/zy.jpg';
import zzl from '../../asset/reporter/zzl.jpg';
import notice3_1 from '../../asset/notice3_1.jpg';
import qr from '../../asset/qr.jpg';
import map from '../../asset/map.jpg';

function CallForPapers() {
  const zhColumns =  [
    {
      title: '报告人',
      key: 'name',
      dataIndex: 'name',
      width: '40%',
      align: 'center',
      render: (_, record) => (
        <div className={styles.nameCol} style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
          <div>{record.name}</div>
          <div>{record.university}</div>
        </div>
      ),
    },
    {
      title: '报告主题',
      dataIndex: 'title',
      align: 'center',
      className: styles.titleCol,
      key: 'title',
    }
  ]
  const zhData =  [
    {
      name: 'David Bradley 教授',
      university: '拉筹伯大学',
      title: 'History of the Mian-Yi Languages'
    },
    {
      name: '丁红卫 教授',
      university: '上海交通大学',
      title: '言语语言作为精神障碍生物社会标志物的探索研究'
    },
    {
      name: '冯胜利 教授',
      university: '北京语言大学',
      title: '高频致俗：语体语法的语距机制——兼谈词汇扩散的条件与新语法学派的缺漏'
    },
    {
      name: '顾曰国 教授',
      university: '北京外国语大学',
      title: 'Towards an Understanding of Language as Lived and Cross-Species Intelligence — An Umwelt-Innenwelt-Lebenswelt Model'
    },
    {
      name: '贺川生 教授',
      university: '湖南大学',
      title: '从古代预期式数词系统看南岛语内部谱系关系'
    },
    {
      name: '孔江平 教授',
      university: '北京大学',
      title: '中华民族通用语言文字的形成和结构层次'
    },
    {
      name: '潘悟云 教授',
      university: '上海师范大学',
      title: '语言演化和演化语素'
    },
    {
      name: '石锋 教授',
      university: '南开大学',
      title: '拉波夫之问: 音在变，还是词在变？'
    },
    {
      name: '戴浩一 教授',
      university: '台湾中正大学',
      title: 'Cognitive Reserve and Aging: Contents, Measurement, and Clinical Application'
    },
    {
      name: '曾志朗 教授',
      university: '台湾“中央研究院”',
      title: 'A Probabilistic-Functionalistic Framework for Infants’ Cognitive Learning: From the Perspective of the Predictive brain and Language Development'
    },
    {
      name: '王士元 教授',
      university: '香港理工大学',
      title: 'Whither sapiens?'
    },
    {
      name: '杨亦鸣 教授',
      university: '江苏师范大学',
      title: 'ChatGPT距人类语言有多远——生成式语言大模型与人类语言生成的比较'
    },
    {
      name: '袁家宏 教授',
      university: '中国科学技术大学',
      title: '年老的语言特征和自动识别'
    },
    {
      name: '张梦翰 研究员',
      university: '复旦大学',
      title: '语言演化的交叉学科视角和建模'
    },
    {
      name: '张扬 教授',
      university: '明尼苏达大学',
      title: 'Unraveling Atypical Auditory and Speech Processing in Chinese Children with Autism Spectrum Disorder: A Multi-faceted Collaborative Approach'
    }
  ];

  const specialData =  [
    {
      name: '黄立鹤 教授',
      university: '同济大学',
      title: '轻度认知障碍老年人的宏观结构叙事能力研究'
    },
    {
      name: '李俊仁 副教授',
      university: '台湾师范大学',
      title: '台湾学童阅读发展跟香港儿童阅读发展的差异'
    },
    {
      name: '李英浩 教授',
      university: '延边大学',
      title: '言语产出中声门特征与舌位的协同作用—来自汉语和朝鲜语的证据'
    },
    {
      name: '鲁曼 教授',
      university: '湖南大学',
      title: '语言中的此消彼长：土家语差比句标记个案研究'
    },
    {
      name: '罗自群 教授',
      university: '中央民族大学',
      title: '怒苏语e31的演化路径'
    },
    {
      name: '曲长亮 教授',
      university: '大连外国语大学',
      title: '英国-北欧学派语音演化思想再思考'
    },
    {
      name: '王如蜜 副主任言语治疗师',
      university: '中南大学湘雅二医院',
      title: '发展性语言障碍的早期识别'
    },
    {
      name: '王莹莹 教授',
      university: '湖南大学',
      title: '语气副词“实在”的量级语义学分析'
    },
    {
      name: '吴君如 副教授',
      university: '华东师范大学',
      title: 'Systematic Correspondence in Co-evolving Languages'
    },
    {
      name: '夏俐萍 研究员',
      university: '中国社会科学院语言研究所',
      title: '湘鄂赣“浊音走廊”的塞音格局'
    },
    {
      name: '张清芳 教授',
      university: '中国人民大学',
      title: '口语句子产生中语法编码老化的认知机制：眼动研究'
    },
    {
      name: '邹嘉彦 教授',
      university: '香港城市大学/香港科技大学',
      title: 'Portmanteau Words in Chinese and Covert Variations among MSC and Dialects'
    },
  ];

  const d13morningPlanColumns = [
    {
      title: '日期',
      key: 'date',
      className: styles.dateCol,
      dataIndex: 'date',
      width: '25%',
      align: 'center',
      render: (text, record, index) => {
        const previousRow = d13morningPlanData[index - 1];
        let nextRow = d13morningPlanData[index + 1];
        
        let rowSpan = 1;
        if (previousRow && previousRow.date === text) {
          return {
            children: text,
            props: {
              rowSpan: 0,
            },
          };
        }
        while (nextRow && nextRow.date === text) {
          rowSpan++;
          index++;
          nextRow = d13morningPlanData[index + 1];
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
      title: '时间',
      dataIndex: 'time',
      className: styles.timeCol,
      key: 'time',
      width: '25%',
      align: 'center',
    },
    {
      title: '内容',
      dataIndex: 'content',
      className: styles.contentCol,
      key: 'content',
      width: '25%',
      align: 'center',
      render: (text, record, index) => {
        const previousRow = d13morningPlanData[index - 1];
        let nextRow = d13morningPlanData[index + 1];
        
        let rowSpan = 1;
        if (previousRow && previousRow.content === text) {
          return {
            children: text,
            props: {
              rowSpan: 0,
            },
          };
        }
        while (nextRow && nextRow.content === text) {
          rowSpan++;
          index++;
          nextRow = d13morningPlanData[index + 1];
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
      title: '地点',
      dataIndex: 'position',
      className: styles.positionCol,
      key: 'position',
      width: '25%',
      align: 'center',
      render: (text, record, index) => {
        const previousRow = d13morningPlanData[index - 1];
        let nextRow = d13morningPlanData[index + 1];
        
        let rowSpan = 1;
        if (previousRow && previousRow.position === text) {
          return {
            children: text,
            props: {
              rowSpan: 0,
            },
          };
        }
        while (nextRow && nextRow.position === text) {
          rowSpan++;
          index++;
          nextRow = d13morningPlanData[index + 1];
        }
        
        return {
          children: text,
          props: {
            rowSpan,
          },
        };
      },
    }
  ]

  const d13morningPlanData = [
    {
      date: '7月13日上午',
      time: '8:30-9:00',
      content: '开幕式、合影',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月13日上午',
      time: '9:00-9:30',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月13日上午',
      time: '9:30-10:00',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月13日上午',
      time: '10:00-10:30',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月13日上午',
      time: '10:30-11:00',
      content: '茶歇',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月13日上午',
      time: '11:00-11:30',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月13日上午',
      time: '11:30-12:00',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月13日上午',
      time: '12:00-12:30',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
  ]

  const d13afternoonPlanColumns = [
    {
      title: '午餐、午休',
      children: [
        {
          title: '日期',
          key: 'date',
          className: styles.dateCol,
          dataIndex: 'date',
          width: '25%',
      align: 'center',
          render: (text, record, index) => {
            const previousRow = d13afternoonPlanData[index - 1];
            let nextRow = d13afternoonPlanData[index + 1];
            
            let rowSpan = 1;
            if (previousRow && previousRow.date === text) {
              return {
                children: text,
                props: {
                  rowSpan: 0,
                },
              };
            }
            while (nextRow && nextRow.date === text) {
              rowSpan++;
              index++;
              nextRow = d13afternoonPlanData[index + 1];
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
          title: '时间',
          dataIndex: 'time',
          className: styles.timeCol,
          key: 'time',
          width: '25%',
      align: 'center',
        },
        {
          title: '内容',
          dataIndex: 'content',
          className: styles.contentCol,
          key: 'content',
          width: '25%',
      align: 'center',
          render: (text, record, index) => {
            const previousRow = d13afternoonPlanData[index - 1];
            let nextRow = d13afternoonPlanData[index + 1];
            
            let rowSpan = 1;
            if (previousRow && previousRow.content === text) {
              return {
                children: text,
                props: {
                  rowSpan: 0,
                },
              };
            }
            while (nextRow && nextRow.content === text) {
              rowSpan++;
              index++;
              nextRow = d13afternoonPlanData[index + 1];
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
          title: '地点',
          dataIndex: 'position',
          className: styles.positionCol,
          key: 'position',
          width: '25%',
      align: 'center',
          render: (text, record, index) => {
            const previousRow = d13afternoonPlanData[index - 1];
            let nextRow = d13afternoonPlanData[index + 1];
            
            let rowSpan = 1;
            if (previousRow && previousRow.position === text) {
              return {
                children: text,
                props: {
                  rowSpan: 0,
                },
              };
            }
            while (nextRow && nextRow.position === text) {
              rowSpan++;
              index++;
              nextRow = d13afternoonPlanData[index + 1];
            }
            
            return {
              children: text,
              props: {
                rowSpan,
              },
            };
          },
        }
      ],
    },
  ]

  const d13afternoonPlanData = [
    {
      date: '7月13日下午',
      time: '14:30-16:10',
      content: '特邀口头报告（201）一般口头报告（其他教室）海报展示',
      position: '湖南大学 复临舍'
    },
    {
      date: '7月13日下午',
      time: '16:10-16:30',
      content: '茶歇',
      position: '湖南大学 复临舍'
    },
    {
      date: '7月13日下午',
      time: '16:30-17:58',
      content: '特邀口头报告（201）一般口头报告（其他教室）海报展示',
      position: '湖南大学 复临舍'
    },
  ]

  const d14morningPlanColumns = [
    {
      title: '晚餐',
      children: [
        {
          title: '日期',
          key: 'date',
          className: styles.dateCol,
          dataIndex: 'date',
          width: '25%',
      align: 'center',
          render: (text, record, index) => {
            const previousRow = d14morningPlanData[index - 1];
            let nextRow = d14morningPlanData[index + 1];
            
            let rowSpan = 1;
            if (previousRow && previousRow.date === text) {
              return {
                children: text,
                props: {
                  rowSpan: 0,
                },
              };
            }
            while (nextRow && nextRow.date === text) {
              rowSpan++;
              index++;
              nextRow = d14morningPlanData[index + 1];
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
          title: '时间',
          dataIndex: 'time',
          className: styles.timeCol,
          key: 'time',
          width: '25%',
      align: 'center',
        },
        {
          title: '内容',
          dataIndex: 'content',
          className: styles.contentCol,
          key: 'content',
          width: '25%',
      align: 'center',
          render: (text, record, index) => {
            const previousRow = d14morningPlanData[index - 1];
            let nextRow = d14morningPlanData[index + 1];
            
            let rowSpan = 1;
            if (previousRow && previousRow.content === text) {
              return {
                children: text,
                props: {
                  rowSpan: 0,
                },
              };
            }
            while (nextRow && nextRow.content === text) {
              rowSpan++;
              index++;
              nextRow = d14morningPlanData[index + 1];
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
          title: '地点',
          dataIndex: 'position',
          className: styles.positionCol,
          key: 'position',
          width: '25%',
      align: 'center',
          render: (text, record, index) => {
            const previousRow = d14morningPlanData[index - 1];
            let nextRow = d14morningPlanData[index + 1];
            
            let rowSpan = 1;
            if (previousRow && previousRow.position === text) {
              return {
                children: text,
                props: {
                  rowSpan: 0,
                },
              };
            }
            while (nextRow && nextRow.position === text) {
              rowSpan++;
              index++;
              nextRow = d14morningPlanData[index + 1];
            }
            
            return {
              children: text,
              props: {
                rowSpan,
              },
            };
          },
        }
      ],
    },
  ]

  const d14morningPlanData = [
    {
      date: '7月14日上午',
      time: '8:30-9:00',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月14日上午',
      time: '9:00-9:30',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月14日上午',
      time: '9:30-10:00',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月14日上午',
      time: '10:00-10:30',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月14日上午',
      time: '10:30-11:00',
      content: '茶歇',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月14日上午',
      time: '11:00-11:30',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月14日上午',
      time: '11:30-12:00',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月14日上午',
      time: '12:00-12:30',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
  ]

  const d14afternoonPlanColumns = [
    {
      title: '午餐、午休',
      children: [
        {
          title: '日期',
          key: 'date',
          className: styles.dateCol,
          dataIndex: 'date',
          width: '25%',
      align: 'center',
          render: (text, record, index) => {
            const previousRow = d14afternoonPlanData[index - 1];
            let nextRow = d14afternoonPlanData[index + 1];
            
            let rowSpan = 1;
            if (previousRow && previousRow.date === text) {
              return {
                children: text,
                props: {
                  rowSpan: 0,
                },
              };
            }
            while (nextRow && nextRow.date === text) {
              rowSpan++;
              index++;
              nextRow = d14afternoonPlanData[index + 1];
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
          title: '时间',
          dataIndex: 'time',
          className: styles.timeCol,
          key: 'time',
          width: '25%',
      align: 'center',
        },
        {
          title: '内容',
          dataIndex: 'content',
          className: styles.contentCol,
          key: 'content',
          width: '25%',
      align: 'center',
          render: (text, record, index) => {
            const previousRow = d14afternoonPlanData[index - 1];
            let nextRow = d14afternoonPlanData[index + 1];
            
            let rowSpan = 1;
            if (previousRow && previousRow.content === text) {
              return {
                children: text,
                props: {
                  rowSpan: 0,
                },
              };
            }
            while (nextRow && nextRow.content === text) {
              rowSpan++;
              index++;
              nextRow = d14afternoonPlanData[index + 1];
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
          title: '地点',
          dataIndex: 'position',
          className: styles.positionCol,
          key: 'position',
          width: '25%',
      align: 'center',
          render: (text, record, index) => {
            const previousRow = d14afternoonPlanData[index - 1];
            let nextRow = d14afternoonPlanData[index + 1];
            
            let rowSpan = 1;
            if (previousRow && previousRow.position === text) {
              return {
                children: text,
                props: {
                  rowSpan: 0,
                },
              };
            }
            while (nextRow && nextRow.position === text) {
              rowSpan++;
              index++;
              nextRow = d14afternoonPlanData[index + 1];
            }
            
            return {
              children: text,
              props: {
                rowSpan,
              },
            };
          },
        }
      ],
    },
  ]

  const d14afternoonPlanData = [
    {
      date: '7月14日下午',
      time: '14:30-16:10',
      content: '特邀口头报告（201）一般口头报告（其他教室）',
      position: '湖南大学 复临舍'
    },
    {
      date: '7月14日下午',
      time: '16:10-16:30',
      content: '茶歇',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月14日下午',
      time: '16:30-17:00',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月14日下午',
      time: '17:00-17:30',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月14日下午',
      time: '17:30-18:00',
      content: '主旨报告',
      position: '湖南大学 逸夫楼'
    },
    {
      date: '7月14日下午',
      time: '18:00-18:15',
      content: '闭幕式',
      position: '湖南大学 逸夫楼'
    },
  ]
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
  
  
  const getRowClassName = (record, index) => {
    return index % 2 === 0 ? styles.even : styles.odd;
  };

  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Call for Papers - 征稿</div>
        <div className={styles.content}>
          <p className={styles.mainTitle}>
            第十五届演化语言学国际研讨会 
          </p>
          <p className={styles.mainTitle}>
            The 15th International Conference in Evolutionary Linguistics
          </p>
          <p className={styles.mt60}></p>
          <p className={styles.mainTitle}>
            (CIEL-15)三号通知
          </p>
          <p className={styles.mainTitle}>
            (CIEL-15)Notice No.3
          </p>
          <p className={styles.mb60}></p>
          <div className={styles.listTitle}>一、会议介绍</div>
          <p className={styles.mt20}>
          以新文科倡导的跨学科视野，演化语言学与人类学、考古学、生物学、语言学、神经科学、心理学和计算机科学等学科交叉共融。演化语言学国际研讨会（International Conference in Evolutionary Linguistics, CIEL）是由国际著名语言学家王士元教授首倡的，至今已经在海内外多所著名高校成功举办了14届，以往在广州（2009年）、天津（2010年、2015年）、上海（2011年、2019年）、北京（2012年）、厦门（2014年）、美国印第安纳州（2016年）、昆明（2017年）、南京（2018年）、兰州（2021年）、济南（2022年）和香港（2013年、2023年）分别成功举办。演化语言学国际研讨会旨在展示语言学的新交叉视野，倡导新的研究手段方法，为相关领域的海内外学者们提供跨学科国际交流合作机会，共同推动演化语言学研究的进步。
          </p>
          <p>
          第十五届演化语言学国际研讨会（CIEL-15）将于2024年7月12日至14日在湖南大学举行，由湖南大学外国语学院主办，深圳市神经科学研究院协办。<b>会议主题：新文科背景下语言演化的跨学科研究。</b>今恭邀国内外专家、学者、教师、研究生拨冗与会！
          </p>
          <p className={styles.imgCenter}>
            <img src={notice3_1}/>
          </p>
          <div className={styles.listTitle}>二、会议议题</div>
          <ul className={styles.mt20}>
            <li>
            （1）汉语及其他语言的祖先；
            </li>
            <li>
            （2）典型和非典型人群的语言发展;
            </li>
            <li>
            （3）老龄化与语言退化；
            </li>
            <li>
            （4）音乐与语言演化;
            </li>
            <li>
            （5）语言、认知与大脑；
            </li>
            <li>
            （6）方言的形成与演化；
            </li>
            <li>
            （7）语言的共时与历时研究；
            </li>
            <li>
            （8）大型语言模型的发展与演化；
            </li>
            <li>
            （9）其他语言相关的议题。
            </li>
          </ul>
          <div className={styles.listTitle}>三、会议形式</div>
          <p className={styles.mt20}>
          本次国际研讨会拟设立三大报告形式：主旨报告、口头报告、海报展示。研讨会学术语言为汉语普通话和英语。
          </p>
          <div className={styles.subTitle}>
          1.	大会主旨报告（以姓氏字母为序）
          </div>
          <Table pagination={false} columns={zhColumns} className={styles.table} showHeader={false} rowClassName={getRowClassName}
          dataSource={zhData} />
          <div className={styles.subTitle}>
          2.	特邀口头报告
          </div>
          <p className={styles.mt20}>
          本次会议设立特邀口头报告，具体信息如下（按照姓氏首字母排序）：
          </p>
          <Table pagination={false} columns={zhColumns} className={styles.table} showHeader={false} rowClassName={getRowClassName}
 dataSource={specialData} />
          <p className={styles.subTitle}>
          3.	一般口头报告。
          </p>
          <p className={styles.mt20}>
          本次会议设置10个分会场，入选的口头汇报将在各分会场进行交流，每个报告12分钟。
          </p>
          <p className={styles.subTitle}>
          4.	海报展示。
          </p>
          <p className={styles.mt20}>
          大会拟设立专门的论文海报展示区域，方便与会代表一对一讨论交流。
          </p>
          <div className={styles.listTitle}>四、会议议程</div>
          <p className={styles.mt20}>
          7月12日全天签到注册，7月13-14日全天进行会议报告及海报展示。具体议程如下表：
          </p>
          <Table pagination={false} columns={d13morningPlanColumns} className={styles.timeTable} showHeader={true}
          dataSource={d13morningPlanData} />
          <Table pagination={false} columns={d13afternoonPlanColumns} className={styles.timeTable} showHeader={true}
          dataSource={d13afternoonPlanData} />
          <Table pagination={false} columns={d14morningPlanColumns} className={styles.timeTable} showHeader={true}
          dataSource={d14morningPlanData} />
          <Table pagination={false} columns={d14afternoonPlanColumns} className={styles.timeTable} showHeader={true}
          dataSource={d14afternoonPlanData} footer={() => <div className={styles.footer}>晚餐</div>} />
          <p className={styles.mt40}></p>

          <div className={styles.listTitle}>五、会议议程</div>
          <p className={styles.mt20} >
          (1) 会务费：人民币800元，全日制研究生凭学生证500元，签到当日现场缴费并获取电子发票。会务费涵盖参加会议期间的用餐、茶歇以及会议资料费。住宿费和交通费需自理。
          </p>
          <p>
          (2) 本次会议收稿日期目前已经截止。为满足各位师生的参会需求，经组委会商议，继续接受大会旁听名额，旁听参会老师或者学生需缴纳会务费，无需提交摘要，也不再安排会议报告。有意旁听者请于6月25日前填写报名链接(<a href="https://www.wjx.top/vm/wkc2hqL.aspx#">https://www.wjx.top/vm/wkc2hqL.aspx#</a>)或扫描下方二维码在线报名，通过报名审核后，会务专家组将在五个工作日内通过邮箱发出正式参会通知和会议具体安排。
          </p>
          <p className={styles.imgCenter}>
            <img src={qr}/>
          </p>
          <p>
          （注：由于旁听席位与场地限制，校外报名人数限定为60人，先到先得。如未能满足您的报名需求，敬请谅解！）
          </p>
          <div className={styles.listTitle}>六、交通及住宿</div>
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
          <div className={styles.listTitle}>（3）会议推荐酒店：湖南大学集贤宾馆</div>
          <div className={styles.listTitle}>七、会议组织</div>
          <div className={styles.listTitle}>（1）报名联系老师：</div>
          <ul className={styles.mt20}>
            <li>
            朱老师：18291849054
            </li>
            <li>
            匡老师：15274656369
            </li>
            <li>
            姜老师：18273128651
            </li>
          </ul>
          <div className={styles.listTitle}>（2）研讨会名誉主席：王士元</div>
          <div className={styles.listTitle}>（3）主席团：陈飞、彭刚、谭力海</div>
          <div className={styles.listTitle}>（4）会议邮箱：ciel15hnu@gmail.com</div>
          <div className={styles.listTitle}>（5）会议主页：http://www.ciel-15.com</div>
          <p className={styles.mt60}></p>
          <p className={styles.mainTitle}>
            (CIEL-15)二号通知
          </p>
          <p className={styles.mainTitle}>
            (CIEL-15)Notice No.2
          </p>
          <p className={styles.mb60}></p>
          <p>
          以新文科倡导的跨学科视野，演化语言学与人类学、考古学、生物学、语言学、神经科学、心理学和计算机科学等学科交叉共融。演化语言学国际研讨会（International Conference in Evolutionary Linguistics, CIEL）是由国际著名语言学家王士元教授首倡的，至今已经在海内外多所著名高校成功举办了14届，以往在广州（2009年）、天津（2010年、2015年）、上海（2011年、2019年）、北京（2012年）、厦门（2014年）、美国印第安纳州（2016年）、昆明（2017年）、南京（2018年）、兰州（2021年）、济南（2022年）和香港（2013年、2023年）分别成功举办。演化语言学国际研讨会旨在展示语言学的新交叉视野，倡导新的研究手段方法，为相关领域的海内外学者们提供跨学科国际交流合作机会，共同推动演化语言学研究的进步。
          </p>
          <p>
          From an interdisciplinary perspective, evolutionary linguistics interacts with anthropology, archeology, biology, linguistics, neuroscience, psychology, and computer science. Collaborative empirical research among these areas will make new contributions to evolutionary linguistics, both in breadth and depth. The International Conference in Evolutionary Linguistics (CIEL) was initiated by Professor WANG S-Y. William. Through CIEL, we wish to promote international interaction and boost interdisciplinary collaborations. Previous CIEL conferences in Guangzhou (2009), Tianjin (2010, 2015), Shanghai (2011, 2019), Beijing (2012), Xiamen (2014), Indiana USA (2016), Kunming (2017), Nanjing (2018), Lanzhou (2021), Jinan (2022), and Hong Kong (2013, 2023) were all held in the same spirit.
          </p>
          <p>
          第十五届演化语言学国际研讨会（CIEL-15）将于2024年7月12日至14日在湖南大学举行，由湖南大学外国语学院主办，深圳市神经科学研究院协办。届时将邀请国内外本领域的著名学者做大会的主旨报告。今恭邀国内外专家、学者、教师、研究生拨冗与会！现将会议日程及摘要提交等相关事项通知如下：
          </p>
          <p>
          The 15th International Conference in Evolutionary Linguistics (CIEL-15) will be held during July 12-14, 2024 at Hunan University. CIEL-15 will be held by School of Foreign Languages, Hunan University, and co-organized by the Shenzhen Institute of Neuroscience. CIEL-15 will invite scholars of representative and influential figures in the relevant fields from both domestic and international areas to deliver keynote speeches. We cordially invite all scholars to attend! Please find below the conference schedule and details regarding the submission of abstracts and other related matters:
          </p>
          <div className={styles.listTitle}>一、会议议题</div>
          <ul className={styles.mt20}>
            <li>
            （1）汉语及其他语言的祖先；
            </li>
            <li>
            （2）典型和非典型人群的语言发展;
            </li>
            <li>
            （3）老龄化与语言退化；
            </li>
            <li>
            （4）音乐与语言演化;
            </li>
            <li>
            （5）语言、认知与大脑；
            </li>
            <li>
            （6）方言的形成与演化；
            </li>
            <li>
            （7）语言的共时与历时研究；
            </li>
            <li>
            （8）大型语言模型的发展与演化；
            </li>
            <li>
            （9）其他语言相关的议题。
            </li>
          </ul>
          <div className={styles.listTitle}>I.Conference Topics</div>
          <ul className={styles.mt20}>
            <li>
              1.	The proto-language of Chinese and other languages;
            </li>
            <li>
              2.	Language development in typical and atypical populations;
            </li>
            <li>
              3.	Ageing and language degradation;
            </li>
            <li>
              4.	The (co)evolution of language and music;
            </li>
            <li>
              5.	Language, cognition, and the brain;
            </li>
            <li>
              6.	Dialect formation and evolution;
            </li>
            <li>
              7.	Diachronic and synchronic study of language;
            </li>
            <li>
              8.	Evolution of large language model;
            </li>
            <li>
              9.	Other language-related research.
            </li>
          </ul>
          <div className={styles.listTitle}>二、会议形式</div>
          <p className={styles.mt20}>
          本次国际研讨会拟设立三大报告形式：主旨报告、口头报告、海报展示。研讨会学术语言为汉语普通话和英语。
          </p>
          <div className={styles.subTitle}>
          1.	大会主旨报告（以姓氏字母为序）
          </div>
          <div className={styles.listTitle}>II.	Conference Format</div>
          <p className={styles.mt20}>
          The conference will set up three types of presentations: keynote speeches, oral presentations, and poster sessions. The academic languages of the conference will be Mandarin Chinese and English.
          </p>
          <div className={styles.subTitle}>
          1.	Keynote Speeches (in alphabetical order by last name)
          </div>
          <Table pagination={false} columns={zhColumns} className={styles.table} showHeader={false} rowClassName={getRowClassName}
          dataSource={zhData} />
          <p className={styles.subTitle}>
          2.	口头报告。每位入选的发言人进行口头汇报与交流。
          </p>
          <p className={styles.subTitle}>
          2.	Oral Presentations. Each selected speaker will provide an oral presentation and engage in discussions.
          </p>
          <p className={styles.subTitle}>
          3.	海报展示。大会拟设立专门的论文海报展示区域，方便与会代表一对一讨论交流。
          </p>
          <p className={styles.subTitle}>
          3.	Poster Sessions. The conference will set up a dedicated area for poster presentations to facilitate one-to-one discussions among participants.
          </p>

          <div className={styles.listTitle}>三、报名注册</div>
          <ul className={styles.mt20} >
            <li>
            1.	会议日程：7月12日全天签到注册，7月13-14日全天进行会议报告及海报展示。
            </li>
            <li>
            2.	会议地点：湖南大学逸夫楼、外国语学院报告厅。;
            </li>
            <li>
            3.	会务费：人民币800元，全日制研究生凭学生证500元，签到当日现场缴费并获取电子发票。会务费涵盖参加会议期间的用餐、茶歇以及会议资料费。住宿费和交通费需自理。
            </li>
          </ul>
          <div className={styles.listTitle}>III.Registration</div>
          <ul className={styles.mt20} >
            <li>
            1.	Conference Schedule: Full-day registration on July 12th, followed by conference presentations and poster sessions throughout July 13th and 14th.
            </li>
            <li>
            2.	Conference Venue: Yifu Building and academic hall of School of Foreign Languages at Hunan University. 
            </li>
            <li>
            3.	Registration Fee: RMB 800 for general attendees and RMB 500 for full-time graduate students upon presentation of a valid student ID. Fees are to be paid on-site at the time of registration, and an electronic receipt will be issued to participants. The fee includes meals, coffee breaks, and conference materials. Please note that accommodation and travel expenses are the responsibility of the participants.
            </li>
          </ul>

          <div className={styles.listTitle}>四、论文征稿及摘要提交要求</div>
          <ul className={styles.mt20} >
            <li>
            1.	每位参会代表均需提交论文摘要。请在摘要中详细标明作者姓名（报告人的名字用下划线突出显示），单位名称以及电子邮箱等。
            </li>
            <li>
            <p>
            2.	投稿截止日期：有意参会代表请在2024年5月10日前把参会详细中文（600-800字）或英文摘要（400-600字）和参会回执（见附件1或者扫描下方二维码下载，参会人员均需提交）以word格式发送至指定邮箱：ciel15hnu@gmail.com。投稿邮件请命名为“CIEL15-姓名-单位-身份（教师或者学生）”。届时组委会将组织专家对摘要进行评审，将于2024年5月31日前发出正式邀请函。
            </p>
            <p className={styles.imgCenter}>
            <Image
              width={200}
              className={styles.qrcode}
              src={qrSrc}
            />
            </p>
            </li>
            <li>
            3.	有关投稿和参会的问题请通过电子邮件ciel15hnu@gmail.com问询。
            </li>
          </ul>

          <div className={styles.listTitle}>IV.	Call for Papers and Submission Requirements</div>
          <ul className={styles.mt20} >
            <li>
            1.	All conference participants are required to submit paper abstract. Please specify the author's name (with the presenter’s name highlighted), affiliation, and email address in the abstract.
            </li>
            <li>
              <p>
              2.	Submission Deadline: Conference participants should submit their detailed abstracts in Chinese (600-800 words) or English (400-600 words) along with the registration receipt (See the attachment or scan the QR code below to download, required for all participants) in Word format to the designated email: ciel15hnu@gmail.com by May 10, 2024. Please format the email title as “CIEL15-Name-Institution-Status (Teacher or Student)”. The organizing committee will arrange for expert review of the abstracts and the official invitation letter will be issued before May 31, 2024.
              </p>
              <p className={styles.imgCenter}>
                <Image
                  width={200}
                  className={styles.qrcode}
                  src={qrSrc}
                />
              </p>
            </li>
            <li>
            3.	For questions regarding conference issues, please contact us via email at ciel15hnu@gmail.com.
            </li>
          </ul>

          <div className={styles.listTitle}>五、大会主旨报告专家简介（以姓氏字母为序）</div>
          <div className={styles.listTitle}>V.	Keynote Speakers' Biographies (in alphabetical order by last name)</div>
          <div className={styles.reporterWapper}>
            <Row gutter={16} className={`${styles.reporterRow} ${styles.row1}`}>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={db}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>David Bradley</span>教授
                      </div>
                      <div className={styles.desc}>
                      Prof David Bradley has made a major contribution to historical linguistics of Sino-Tibetan languages, to documentation and sociolinguistic study of Sino-Tibetan languages, and to work on endangered languages. He has documented a number of Sino-Tibetan languages and worked with various communities to maintain and revitalise their languages, and trained and supported large numbers of scholars to do similar work around the world. He has contributed very substantially to linguistic theory, particularly concerning Sino-Tibetan historical linguistics and language endangerment, and taken many leadership roles in the discipline, notably as President of the UNESCO Comité International Permanent des Linguistes (CIPL) and editor of the journal Linguistics of the Tibeto-Burman Area. He has also published over 20 books and participated in various language atlases.
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={dhw}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>丁红卫</span>教授
                      </div>
                      <div className={styles.desc}>
                      上海交通大学外国语学院长聘教授。获德国语言学博士与工学教授资格。国家社科重大项目“精神障碍人群语料库建设及面向脑科学和人工智能的语言研究”首席专家。于德国电子信息学院从事语音技术研究十余年间，主持或参与十多项德国或欧盟纵向项目及国际著名公司横向项目，包括多语种语音合成系统建设与计算机辅助语音学习系统研发等。回国后主要从事二语语音习得研究，近年来聚焦听力及精神障碍人群语音韵律的认知神经科学探究。并继续与国际著名公司合作研发语音智能及言语病理方面的技术产品。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={fsl}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>冯胜利</span>教授
                      </div>
                      <div className={styles.desc}>
                      北京语言大学语言科学院章黄学术理论研究所所长、教授、博士生导师；北京师范大学特聘教授、天津大学语言科学中心首席教授、香港树仁大学中文系客座教授、香港中文大学荣誉退休教授。受业于宾夕法尼亚大学拉波夫教授，专攻西方语言学，1995年获得美国宾夕法尼亚大学（University of Pennsylvania）语言学系博士学位。现任《中国语言学报》（JCL，SSCI索引）联席主编和《韵律语法研究》联席主编。曾任北京语言大学长江学者讲座教授（2005年）、美国堪萨斯大学东亚系副教授，哈佛大学东亚系汉语应用学科教授及中文部主任。研究方向包括乾嘉“理必”与章黄学理研究、训诂学、韵律语法学、语体语法学、汉语历时句法学、汉语韵律文学史及汉语二语教学与习得。出版中文学术专著16部（其中4部被译为英文、韩文等）、英文学术专著2部，主编学术著作16部，发表中英文学术论文200余篇。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row gutter={16} className={`${styles.reporterRow} ${styles.row2}`}>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={grg}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>顾曰国</span>教授
                      </div>
                      <div className={styles.desc}>
                      获得英国兰开斯特大学硕士、博士以及荣誉文学博士学位，现任北京外国语大学人工智能与人类语言重点实验室首席专家。兼任中国多语言多模态语料库暨大数据研究中心主任，老年语言与看护研究中心主任（同济大学-社科院语言所联合）。主要研究兴趣包括语料库语言学、语用学、话语分析、英语教育等。主要著作有Studies in Pragmatics and Discourse Analysis, Using the Computer in ELT: Practice and Theory, Chinese Painting，Chinese Writing, The Handbook of Pragmatics (主编之一)，Encyclopedia of Language and Linguistics (15卷套，顾问、作者)，Encyclopedia of Chinese Language and Linguistics (5卷套, 副主编，作者)，《老年语言学与多模态研究》（主编、作者）。编写英语教材50余部。曾获五项国家级顶尖研究奖。国际学术兼职有英国诺定汉大学特聘教授、兰开斯特大学特聘研究员,香港理工大学校外学术顾问、澳大利亚西悉尼大学外聘教授,彼得大帝彼得堡理工大学访问讲习教授、澳大利亚悉尼大学杰出研究员等。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={hcs}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>贺川生</span>教授
                      </div>
                      <div className={styles.desc}>
                      湖南大学外国语学院教授。研究兴趣包括句法学、语义学、历史语言学等。在English Language and Linguistics、Journal of the Royal Asiatic Society、Language and Linguistics、Lingua、Syntax 、Synthese 、Zeitschrift der Deutschen Morgenlandischen Gesellschaft 、《当代语言学》、《民族语文》、《外语教学与研究》、《现代外语》、《语言教学与研究》、《中央民族大学学报》等国内外期刊发表研究性论文，出版专著《数词的句法语义界面研究》，曾获教育部高等学校人文社会科学优秀成果奖二等奖。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={kjp}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>孔江平</span>教授
                      </div>
                      <div className={styles.desc}>
                      北京大学中文系教授，博导，教育部“北京大学语言学实验室”主任，中国语言学会语音学分会主任。曾主持中国社会科学基金重大招标项目“中国有声语言和口传文化保护与传承的数字化方法及其理论研究”；现主持中国社会科学基金重大招标项目“中华民族语言文字接触交融研究”。主要研究领域：中华民族语言文字共同体的形成和构成，中华传统有声文化的声学、语音生理和认知研究，中国境内语言的语音学及嗓音发声类型研究、汉语普通话发音生理模型研究、认知音位学研究、音位负担量及语音信息研究等。有《论语言发声》、《Laryngeal Dynamics and Physiological Model》、《实验语音学基础教程》、《现代汉语音典》（合著）、《王士元先生口述史》（合编）等著作，拥有《语音学基础分析系统》等十多项软件的著作权。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row gutter={16} className={`${styles.reporterRow} ${styles.row3}`}>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={pwy}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>潘悟云</span>教授
                      </div>
                      <div className={styles.desc}>
                      上海师范大学教授，博士生导师，上海高校比较语言学E-研究院首席研究员，复旦大学杰出访问学者，复旦大学东亚语言数据研究所负责人。曾任上海社联副主席、上海社联语言研究中心主任；“21世纪中国语言与方言数据库”执行组的大陆召集人。任《语言研究》编委，《语言科学》编委，《民族语文》编委，《中国语文》编委，《东方语言学》主编等。主持多项国家部项目。研究方向为语言人类学，计算语言学，语言演化，历史语言学，汉语音韵学。研究方向着重关注东亚语言历史、文化传播和人群迁移；汉语史与东亚语言历史比较（尤其是上古汉语的研究）；汉语方言学与历史层次分析法；语言系统中音类的自组织现象；语料库计算机处理等。目前主要工作是语言演化与东亚语言的关系语素分析。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={sf}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>石锋</span>教授
                      </div>
                      <div className={styles.desc}>
                      南开大学语言所名誉所长。《南开语言学刊》和Experimental Linguistics (《实验语言学》)名誉主编, Journal of Chinese Linguistics(《中国语言学报》)副主编，LINGUA编委。国际中国语言学会会长。教育部国家普通话审音委员会委员。世界汉语教学学会学术指导委员会委员。研究领域为实验语言学、语言演化、语言接触与语言习得。论著或编著《语音格局》《语调格局》《听感格局》《韵律格局》《秋叶集》《银龄集》等20余种。出版译著5部。在国内外发表论文260余篇。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={dhy}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>戴浩一</span>教授
                      </div>
                      <div className={styles.desc}>
                      台湾鹿港人。国立台湾大学外国语文学系学士（1964），美国印地安那大学（Indiana University）语言学博士（1970）。在美国南伊利诺伊大学（Southern Illinois University）及俄亥俄州立大学（Ohio State University）任教长达25年（1970-1995）。1995年受邀返台创设国立中正大学语言学研究所并担任第一任及第二任所长，历任文学院院长（1998-2002）、副校长（2009）。其间曾借调国科会担任人文及社会科学发展处处长（2002-2005）。2004年获选为国际中国语言学会（IACL）会长，2010年获颁台湾语言学学会「终身成就奖」，2020年获选为美国印第安那大学（建校200年）语言学系杰出校友。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row gutter={16} className={`${styles.reporterRow} ${styles.row4}`}>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={zzl}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>曾志朗</span>教授
                      </div>
                      <div className={styles.desc}>
                      Professor Ovid Tzeng is Academician of Academia Sinica in Taiwan, an outstanding researcher in Cognitive Neuroscience and Neurolinguistics and an experienced leader in academic institutions. He was the chancellor of University System of Taiwan, the Minister of Education, the Minister Without Portfolio, and the Minister of Council for Cultural Affairs. He serves as a member of the Board of Directors of Haskins Laboratories in the U.S. and an advisory board member of the ARC Centre of Excellence in Cognition and its Disorders in Australia. He has also been elected to be the academician of The World Academy of Sciences (TWAS) since 2010 and active member of The European Academy of Sciences and Arts since 2017. He had been the Chancellor of University System of Taiwan for several years, which was created by him and established to oversee and integrate the research and teaching developments of Taiwan’s four top research universities. Prior to the Chancellorship, he was the Vice President of Academia Sinica for international affairs. He is currently an Executive member of the Committee on Human Rights of the NAS, NAE, and NAM, as well as a member of the UNESCO’s Inclusive Literacy Learning for All Project.

                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={wsy}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>王士元</span>教授
                      </div>
                      <div className={styles.desc}>
                      1933年出生于上海市，祖籍安徽省怀远县，语言学家，香港理工大学语言及认知科学讲座教授，台湾“中”研究院院士。王士元于1960年获得密西根大学博士学位，其后在IBM研究中心（约克城高地）和麻省理工学院的电子研究实验室进行自然语言处理的早期研究；1963年—1965年任俄亥俄州立大学语言学系及东亚语文学系主任；1966年—1994年任加利福尼亚大学伯克利分校语言学教授；1995年—2004年任香港城市大学语言工程讲座教授；2004年—2015年任香港中文大学电子工程学系研究教授；2015年任香港理工大学语言及认知科学讲座教授。王士元的研究范畴包括语音学及音韵学、自动语音辨识，以及语言与认知能力的生物及演化基础。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={yym}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>杨亦鸣</span>教授
                      </div>
                      <div className={styles.desc}>
                      教育部“长江学者”特聘教授，国家“万人计划”教学名师，全国高校黄大年式教师团队带头人，享受国务院政府特殊津贴专家，江苏省社科名家，江苏省“首席中青年科学家”（江苏省“333 工程”第一层次），江苏省“十佳研究生导师团队”带头人，博士生导师、博士后联系导师。现为江苏师范大学校学术委员会主任委员，国家2011计划语言能力部省共建协同创新中心主任，语言科学与艺术国家级实验教学示范中心主任，国家语委语言能力高等研究院院长，《语言科学》主编等。曾任江苏师范大学副校长。主要学术兼职为国家哲学社会科学基金和国家自然科学基金会评专家，科技部科技创新2030—“脑科学与类脑研究”重大项目评审专家，教育部重点实验室（交叉领域类）验收考核组组长、中国语言学会常务理事、 中国语文现代化学会副会长等。研究兴趣为神经语言学、理论语言学等，主持国家社科基金重大委托项目、重大项目3项，国家973计划课题、国家社科基金重点项目、国家自然科学基金项目等多项。先后在PNAS、Brain、Cognition、《中国社会科学》、《中国科学》、《中国语文》等刊物发表论文两百余篇，出版著作10余部。曾获国家级教学成果奖一等奖、教育部高等学校人文社会科学优秀成果奖一等奖等。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row gutter={16} className={`${styles.reporterRow} ${styles.row5}`}>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={yjh}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>袁家宏</span>教授
                      </div>
                      <div className={styles.desc}>
                      中国科学技术大学人文与社会科学学院教授。2004年获得康乃尔大学语言学博士学位。曾任职于宾夕法尼亚大学语言学系和语言资源联盟、流利说硅谷人工智能实验室、百度美国研究院。主要研究方向包括大数据语音学、语言学和人工智能的融合。曾主持或合作主持美国国家科学基金会、英国经济与社会研究理事会、香港研究资助局等资助的多项科研项目。目前的研究主要集中在基于口语数据的阿尔茨海默病早期识别和预测、和基于深度学习的语音分析方法，在研项目包括“社会语言学、病理语言学和人工智能三重视角下基于语言变化的AD语言生物标志物研究”和“生物语言学视角下多学科交叉汉语声调研究”。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={zmh}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>张梦翰</span>研究员
                      </div>
                      <div className={styles.desc}>
                      博士，复旦大学现代语言学研究院研究员，生物学博士生导师，智能复杂体系基础理论与关键技术实验室副主任；复旦大学生命科学学院和人类表型组研究院PI（双聘）。荣获国家自然科学基金委优秀青年基金（2021年），入选上海市曙光学者（2020年），上海市“社科新人”（2019年）。上海市人类学学会理事、中国民族语言学会会员。主要从事语言演化、语言-遗传-文化共演化机制研究。先后承担多个国家自然科学基金、国家社科重大项目子课题、欧盟先进研究理事会“地平线”项目子课题等项目，为国家社科基金冷门绝学研究专项学术团队核心成员。以第一作者或通讯作者在Nature、Nature Communications、Nature Human Behaviour、PNAS、National Science Review、Proceedings B等国内外期刊上发表论文三十余篇，申请了多项国家专利（获批5项），荣获上海市第十五届哲学社会科学优秀成果奖（学科学术优秀成果论文类二等奖），上海优秀博士论文。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card  bordered={false} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.imgDiv}>
                      <img src={zy}/>
                    </div>
                    <div className={styles.botDiv}>
                      <div className={styles.name}>
                        <span className={styles.left}>张扬</span>教授
                      </div>
                      <div className={styles.desc}>
                      美国明尼苏达大学言语—语言—听力科学系教授，研究领域包括：言语感知与产出，发展心理学以及言语交流的神经基础。他同时担任磁共振研究中心、神经行为发展中心和应用与转化感觉科学中心的首席研究员。他目前担任期刊Developmental Science副主编、Brain Sciences部门主编，并在多个其他期刊的编辑委员会任职。
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>

          <div className={styles.listTitle}>六、会议组织</div>
          <ul className={styles.mt20} >
            <li>
            （1）研讨会名誉主席：王士元
            </li>
            <li>
            （2）主席团：陈飞、彭刚、谭力海
            </li>
            <li>
            （3）电子邮箱：ciel15hnu@gmail.com
            </li>
            <li>
            （4）会议主页：http://www.ciel-15.com
            </li>
          </ul>

          <div className={styles.listTitle}>VI.	Conference Organization</div>
          <ul className={styles.mt20} >
            <li>
            1.	Honorary Chair: WANG S-Y.William
            </li>
            <li>
            2.	Organizing Committee: CHEN Fei, PENG Gang, TAN Lihai
            </li>
            <li>
            3.	Email: ciel15hnu@gmail.com
            </li>
            <li>
            4.	Conference Website: http://www.ciel-15.com
            </li>
          </ul>

          <p>
          有关本次会议的最新信息还将在湖南大学外国语学院网站(http://english.hnu.edu.cn/)，第十五届演化语言学国际研讨会网站 (http://www.ciel-15.com)，以及【语言认知与健康】微信公众号上刊出，敬请关注。
          </p>
          <p>
          Information about this conference will also be available on the School of Foreign Languages at Hunan University website (http://english.hnu.edu.cn/), the 15th International Conference in Evolutionary Linguistics (CIEL-15) official website (http://www.ciel-15.com), and the WeChat public account【语言认知与健康】. Please stay updated by checking these platforms. 
          </p>
          <p className={styles.mt60}></p>
          <p className={styles.mainTitle}>
            (CIEL-15)一号通知
          </p>
          <p className={styles.mainTitle}>
            (CIEL-15)Notice No.1
          </p>
          <p className={styles.mb60}></p>
          <p>
          第十五届演化语言学国际研讨会（CIEL-15）将于2024年7月12日至14日在湖南大学举行，由湖南大学外国语学院主办，深圳市神经科学研究院协办。
          </p>
          <p>
          The 15th International Conference in Evolutionary Linguistics (CIEL-15) will be held during July 12-14, 2024 at Hunan University. CIEL-15 will be held by School of Foreign Languages, Hunan University, and co-organized by the Shenzhen Institute of Neuroscience.
          </p>
          <p>
          会议将邀请国内外相关领域有代表性和影响力的学者做大会的主题报告。今恭邀各位学者同道拔冗参会，并敬请于2024年5月1日前将参会论文题目及摘要（约400—800字）以word格式发送至ciel15hnu@gmail.com。会议正式邀请函将于2024年5月31日前发出。研讨会学术语言为汉语普通话和英语。
          </p>
          <p>
          CIEL-15 will invite scholars of representative and influential figures in the relevant fields from both domestic and international arenas to deliver keynote speeches. We cordially invite all scholars to attend, and kindly request that the titles and abstracts (approximately 400-800 words) of the papers to be presented at the conference be submitted in Word format to ciel15hnu@gmail.com by May 1, 2024. The official invitation letter will be issued before May 31, 2024. The working languages of CIEL-15 are Mandarin and English.
          </p>
          <div className={styles.listTitle}>会议议题</div>
          <ul className={styles.mt20} >
            <li>
            （1）汉语及其他语言的祖先；
            </li>
            <li>
            （2）典型和非典型人群的语言发展;
            </li>
            <li>
            （3）老龄化与语言退化；
            </li>
            <li>
            （4）音乐与语言演化;
            </li>
            <li>
            （5）语言、认知与大脑；
            </li>
            <li>
            （6）方言的形成与演化；
            </li>
            <li>
            （7）语言的共时与历时研究；
            </li>
            <li>
            （8）大型语言模型的发展与演化；
            </li>
            <li>
            （9）其他语言相关的议题。
            </li>
          </ul>
          <div className={styles.listTitle}>Conference topics may include the following:</div>
          <ul className={styles.mt20} >
            <li>
              1.	The proto-language of Chinese and other languages;
            </li>
            <li>
              2.	Language development in typical and atypical populations;
            </li>
            <li>
              3.	Ageing and language degradation;
            </li>
            <li>
              4.	The (co)evolution of language and music;
            </li>
            <li>
              5.	Language, cognition, and the brain;
            </li>
            <li>
              6.	Dialect formation and evolution;
            </li>
            <li>
              7.	Diachronic and synchronic study of language;
            </li>
            <li>
              8.	Evolution of large language model;
            </li>
            <li>
              9.	Other language-related research.
            </li>
          </ul>
          <div className={styles.listTitle}>会议组织</div>
          <ul className={styles.mt20} >
            <li>
            （1）研讨会名誉主席：王士元
            </li>
            <li>
            （2）主席团：陈飞、彭刚、谭力海
            </li>
            <li>
            （3）电子邮箱：ciel15hnu@gmail.com
            </li>
            <li>
            （4）会议主页：http://www.ciel-15.com
            </li>
          </ul>
          <div className={styles.listTitle}>Conference Organization:</div>
          <ul className={styles.mt20} >
            <li>
              1.	Honorary Chair: WANG S-Y.William
            </li>
            <li>
              2.	Organizing Committee: CHEN Fei, PENG Gang, TAN Lihai
            </li>
            <li>
              3.	Email: ciel15hnu@gmail.com
            </li>
            <li>
              4.	Conference Website: http://www.ciel-15.com
            </li>
          </ul>
        </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(CallForPapers);
