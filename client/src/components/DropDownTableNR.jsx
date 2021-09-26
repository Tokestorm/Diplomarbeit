import React from "react";
import { Menu, Dropdown } from 'antd';

export const DropDownTableNR = (props) => {
    const { setTableNR } = props;

    return (
        <Dropdown
                overlay={(
                  <Menu>
                    <Menu.Item key="1" onClick={(item) => setTableNR(item.key)}>
                        1
                    </Menu.Item>
                    <Menu.Item key="2" onClick={(item) => setTableNR(item.key)}>
                        2
                    </Menu.Item>
                    <Menu.Item key="3" onClick={(item) => setTableNR(item.key)}>
                        3
                    </Menu.Item>
                    <Menu.Item key="4" onClick={(item) => setTableNR(item.key)}>
                        4
                    </Menu.Item>
                    <Menu.Item key="5" onClick={(item) => setTableNR(item.key)}>
                        5
                    </Menu.Item>
                    <Menu.Item key="6" onClick={(item) => setTableNR(item.key)}>
                        6
                    </Menu.Item>
                    <Menu.Item key="7" onClick={(item) => setTableNR(item.key)}>
                        7
                    </Menu.Item>
                    <Menu.Item key="8" onClick={(item) => setTableNR(item.key)}>
                        8
                    </Menu.Item>
                  </Menu>
                )}
                trigger={['click']}>
                <a className="ant-dropdown-link" 
                   onClick={e => e.preventDefault()}>
                  set place
                </a>
              </Dropdown>
    )
}