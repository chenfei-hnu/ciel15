import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import menu from '@config/menu';
import { verArr } from '@utils/util';
import styles from './index.less';
import { MenuFoldOutlined } from '@ant-design/icons';

type titleNode = {
  name: string;
  path: string;
  icon: string;
  list?: any[];
};
interface InitProp {
  history: {
    location: {
      pathname?: string;
    };
    push: any;
  };
  location: {
    pathname?: string;
  };
}

function SiderMenu(props: InitProp) {
  const [keys, setKeys] = useState<string[]>([]);
  const { pathname } = props.history && props.history.location;
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (pathname) setKeys([pathname]);
  }, [pathname]);

  /**
   * @desc 处理选中路由
   * @param { string } key 当前所选菜单项
   */
  const handleSelect = ({ key }) => {
    props.history.push(key)
  };

  const handleSelectItem = (key) => {
    props.history.push(key)
  };
  

  /**
   * @desc 当前选中项名字
   * @param { object } item 当前所选菜单项
   */
  const titleNode = (item: titleNode) => {
    return (
      <span>
        <span>{item.name}</span>
      </span>
    );
  };

  const defaultKeys = (verArr(keys) && ['/' + keys[0].split('/')[1]]) || [];

  const mobileMenu = (
    <Menu 
      mode="vertical" 
      defaultOpenKeys={defaultKeys} 
      selectedKeys={keys} 
      theme="dark" 
      className={styles.menu}
    >
      {
        menu.map((item: any) =>
          <Menu.Item onClick={() => handleSelectItem(item.path)} className={styles.menuItem} key={item.path}>
            <span>{item.name}({item.en})</span>
          </Menu.Item>
        )
      }
    </Menu>
  );

  return (
    <div className={styles.menuWapper}>
      {
        isMobile ? <Dropdown overlay={mobileMenu} trigger={['click']}>
        <a className={styles.menuLink} onClick={(e) => e.preventDefault()}>
          <MenuFoldOutlined style={{ fontSize: '52px', color: '#fff' }} />
        </a>
      </Dropdown>
      : 
      <Menu
        mode="horizontal"
        onSelect={handleSelect}
        className={styles.menu}
        selectedKeys={keys}
        defaultOpenKeys={defaultKeys}
      >
        {verArr(menu) &&
          menu.map((item: any) =>
            item && verArr(item['list']) ? (
              <Menu.SubMenu key={item.path} title={titleNode(item)}>
                {item['list'].map((listItem: any) => (
                  <Menu.Item key={item.path + listItem.path}>
                    <span>{listItem.name}</span>
                    <span>{listItem.en}</span>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item.path}>
                <span>{item.name}</span>
                <span>{item.en}</span>
              </Menu.Item>
            )
          )}
      </Menu>
      }
    </div>
  );
}

export default withRouter(SiderMenu);
