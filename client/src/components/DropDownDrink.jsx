import React from "react";
import { Menu, Dropdown } from 'antd';

export const DropDownDrink = (props) => {
    const { setDrink } = props;

    return (
        <Dropdown
                overlay={(
                  <Menu>
                    <Menu.Item key="Coke" onClick={(item) => setDrink(item.key)}>
                        Coke
                    </Menu.Item>
                    <Menu.Item key="Sprite" onClick={(item) => setDrink(item.key)}>
                        Sprite
                    </Menu.Item>
                    <Menu.Item key="3" onClick={(item) => setDrink(item.key)}>
                        Fanta
                    </Menu.Item>
                    <Menu.Item key="4" onClick={(item) => setDrink(item.key)}>
                        Beer
                    </Menu.Item>
                    <Menu.Item key="5" onClick={(item) => setDrink(item.key)}>
                        Wine
                    </Menu.Item>
                    <Menu.Item key="6" onClick={(item) => setDrink(item.key)}>
                        Water
                    </Menu.Item>
                    <Menu.Item key="7" onClick={(item) => setDrink(item.key)}>
                        Tee
                    </Menu.Item>
                    <Menu.Item key="8" onClick={(item) => setDrink(item.key)}>
                        Coffee
                    </Menu.Item>
                  </Menu>
                )}
                trigger={['click']}>
                <a className="ant-dropdown-link" 
                   onClick={e => e.preventDefault()}>
                  set drink
                </a>
              </Dropdown>
    )
}