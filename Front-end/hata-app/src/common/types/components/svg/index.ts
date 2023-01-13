export interface ICustomSvg {
    width?: null | number
    height?: null | number
}

export interface ICustomColorSvg extends ICustomSvg{
   color?: string | null
}