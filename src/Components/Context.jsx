import React from 'react';

const ColorContext = React.createContext({
    bgColor : undefined,
    textColorHandler : undefined,
    textColor : null,
    dispColor : undefined,
    tglkbdbg : null,
    tglkbdbgHandler : undefined,
    kbdbgColor: null,
    setKbdbgColor: undefined,
    KbdkeytextColor : null,
    setKbdkeytextColor : undefined,
    shadowColor : null,
    setshadowColor : undefined
})

export default ColorContext