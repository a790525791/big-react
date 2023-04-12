// 判断当前环境是否支持symbol, 如果支持symbol,就创建一个symbol,否则就创建一个数字

const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
