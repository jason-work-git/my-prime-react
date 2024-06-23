'use client';
import * as React from 'react';
import { PrimeReactContext } from 'ytg-reusable-components/api';
import { useMergeProps } from 'ytg-reusable-components/hooks';
import { ComponentBase } from 'ytg-reusable-components/componentbase';
import { ObjectUtils } from 'ytg-reusable-components/utils';

var RowBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Row',
    style: null,
    className: null,
    children: undefined
  },
  getCProp: function getCProp(row, name) {
    return ObjectUtils.getComponentProp(row, name, RowBase.defaultProps);
  }
});

var Row = function Row(inProps) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = RowBase.getProps(inProps, context);
  //@todo Pass Parent MetaData
  var _RowBase$setMetaData = RowBase.setMetaData({
      props: props
    }),
    ptm = _RowBase$setMetaData.ptm;
  var rootProps = mergeProps({
    className: props.className,
    style: props.style
  }, RowBase.getOtherProps(props), ptm('root'));
  return /*#__PURE__*/React.createElement("tr", rootProps, props.children);
};
Row.displayName = 'Row';

export { Row };
