import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import footerLayoutStyle from './FooterLayout.scss';
//import mainStyle from './MessageBoxFunctionalLayout.scss';

const messageBoxDriverFactory = ({element, wrapper, component}) => {
  // const footer = () => element.querySelector('[data-hook="message-box-footer"]');
  const confirmationButton = () => element.querySelector('[data-hook="confirmation-button"]');
  const cancellationButton = () => element.querySelector('[data-hook="cancellation-button"]');

  //const classExists = className => element.querySelector(notificationWrapperSelector).classList.contains(className);

  return {
    exists: () => !!element,
    getConfirmationButtonText: () => confirmationButton().textContent,
    clickOnConfirmationButton: () => ReactTestUtils.Simulate.click(confirmationButton()),
    getCancellationButton: cancellationButton,
    getCancellationButtonText: () => cancellationButton().textContent,
    clickOnCancellationButton: () => ReactTestUtils.Simulate.click(cancellationButton()),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default messageBoxDriverFactory;
