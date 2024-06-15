import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';
import { Table, Image, Row, Card, Col } from 'antd';
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

function Speakers() {
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
      title: '待定'
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
  
  const getRowClassName = (record, index) => {
    return index % 2 === 0 ? styles.even : styles.odd;
  };

  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.title}>Speakers - 主题报告</div>
        <div className={styles.content}>
          <Table pagination={false} columns={zhColumns} className={styles.table} showHeader={false} rowClassName={getRowClassName}
 dataSource={zhData} />
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
        </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Speakers);
