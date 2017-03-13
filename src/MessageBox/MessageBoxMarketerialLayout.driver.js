import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const messageBoxMarketerialLayoutDriverFactory = ({element, wrapper, component}) => {
  const primaryButton = () => element.querySelector('[data-hook="primary-button"]');
  const secondaryButton = () => element.querySelector('[data-hook="secondary-button"]');

  return {
    exists: () => !!(element),
    getPrimaryButtonText: () => primaryButton().textContent,
    getSecondaryButtonText: () => secondaryButton().textContent,
    clickOnPrimaryButton: () => ReactTestUtils.Simulate.click(primaryButton()),
    clickOnSecondaryButton: () => ReactTestUtils.Simulate.click(secondaryButton()),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default messageBoxMarketerialLayoutDriverFactory;
