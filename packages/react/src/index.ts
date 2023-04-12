// 17之前 React.createElement()
// 17之后就是react/jsx方法的调用

// jsx转换包括两个部分
// 1. 编译时
// 由babel编译实现的
// 2. 执行时: jsx方法或React.createElement方法的实现(包括dev, prod两个环境)

// 2.1 实现jsx方法
// 2.2 实现打包方法
// 2.3 实现调试打包结果的环境
import { REACT_ELEMENT_TYPE } from '../../shared/ReactSymbol';
import {
	Type,
	Key,
	Ref,
	Props,
	ReactElement,
	ElementType
} from '../../shared/ReactTypes';

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'colin'
	};
	return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];

		if (prop === 'key') {
			if (val !== undefined) {
				key = val + '';
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[props] = val;
		}
	}
	const maybeChildrenLength = maybeChildren?.length;
	if (maybeChildrenLength === 1) {
		props.children = maybeChildren[0];
	} else {
		props.children = maybeChildren;
	}
	return ReactElement(type, key, ref, props);
};

export const jesDex = jsx;
