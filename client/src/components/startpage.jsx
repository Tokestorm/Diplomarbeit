import React, { useState } from "react";
import "antd/dist/antd.css";

import { Button, Slider} from 'antd'

import { DropDownTableNR } from './DropDownTableNR'
import { DropDownDrink } from './DropDownDrink'

export const StartPage = (props) => {

    const { tableNR, setTableNR } = props
    const [ drink, setDrink ] = useState(null)
    const [rollenAusgefahren, setRollenAusgefahren] = useState(false)
    const [ fillValue, setFillValue ] = useState(0)

    function onButtonClick(e) {
        rollenAusgefahren ? setRollenAusgefahren(false) : setRollenAusgefahren(true)
        alert(rollenAusgefahren)
    }

    function onChangeSlider(value) {
        setFillValue(value)
    }

    function onClickAddToQueue() {
        alert('order will be proceed')
    }

    function formatter(value) {
        return `${value}%`;
      }

    return (
        <div style={{
            display: 'block', width: 700, padding: 30
          }}>
          <p>Sitzplatz: {tableNR}</p>
          <p>Current Drink: {drink}</p>
          <p>rollen ausgefahren: {rollenAusgefahren}</p>
          <p>füllmenge: {fillValue}</p>
            <>
                <DropDownTableNR setTableNR={setTableNR}></DropDownTableNR>
                <tr/>
                <DropDownDrink setDrink={setDrink}></DropDownDrink>
                <tr/>
                <Slider tipFormatter={formatter} onChange={onChangeSlider} />
                <tr/>
                <Button onClick={onClickAddToQueue}>add to queue</Button>
                <tr/>
                <Button onClick={(e) => onButtonClick(e)}>Rollen ausfahren</Button>
            </>
          </div>
    )
}