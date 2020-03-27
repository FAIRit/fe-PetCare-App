import React from 'react';
import PropTypes from 'prop-types';
import { ContentType } from './Label';
import { DataKey } from '../util/types';
interface Data {
    value?: number | string | Array<number | string>;
    payload?: any;
}
interface Props<T extends Data> {
    id?: string;
    data: Array<T>;
    valueAccessor?: Function;
    clockWise?: boolean;
    dataKey?: DataKey<T>;
    content?: ContentType;
}
declare function LabelList<T extends Data>(props: Props<T>): JSX.Element;
declare namespace LabelList {
    var propTypes: {
        id: PropTypes.Requireable<string>;
        data: PropTypes.Requireable<object[]>;
        valueAccessor: PropTypes.Requireable<(...args: any[]) => any>;
        clockWise: PropTypes.Requireable<boolean>;
        dataKey: PropTypes.Requireable<string | number | ((...args: any[]) => any)>;
    };
    var displayName: string;
    var renderCallByParent: <T extends Data>(parentProps: any, data: T[], ckeckPropsLabel?: boolean) => JSX.Element[];
    var defaultProps: {
        valueAccessor: (entry: Data) => React.ReactText;
    };
}
export default LabelList;
