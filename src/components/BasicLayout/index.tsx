import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
import { Route } from 'react-router-dom';
import routes from '@config/routes';
import { verArr } from '@utils/util';
import SiderMenu from './SiderMenu';
import styles from './index.less';
import { useLocation } from 'react-router-dom';

function BasicLayout() {
  const location = useLocation();

  return (
    <Layout className={styles.layoutWrap}>
      <Header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContent}>
            <p className={styles.logo} />
          </div>
          <SiderMenu />
        </div>
      </Header> 
      <Content className={styles.content}>
        <div className="site-layout-background">
          {verArr(routes) &&
            routes.map((item, i) => (
              <Route key={i.toString()} path={item.path} component={item.component} exact />
            ))}
        </div>
      </Content>
    </Layout>
  );
}

export default BasicLayout;
