import React from 'react';
import MessageBoxMarketerialLayout from './MessageBoxMarketerialLayout';
import MessageBoxMarketerialLayoutFactory from './MessageBoxMarketerialLayout.driver';
import {createDriverFactory} from '../test-common';
import sinon from 'sinon';
import {isTestkitExists, isEnzymeTestkitExists} from '../../testkit/test-common';
import {messageBoxMarketeriallLayoutTestkitFactory} from '../../testkit';
import {messageBoxMarketerialLayoutTestkitFactory as enzymeMessageBoxTestkitFactory} from '../../testkit/enzyme';

/**
 * title={<span>Looking Good! <br/> Your Site Is On Google</span>}
  content="All of your pages are indexed and now come up as separate search results on Google. This is great for your visbility!"
  primaryButtonLabel="Got It"
  secondaryButtonLabel="Preview on Google"
  onSecondaryButtonClick={log('secondary button click')}
  onPrimaryButtonClick={log('primary button click')}
  onClose={close}
  theme="blue"
  imageUrl="http://www.domstechblog.com/wp-content/uploads/2015/09/wix.png"
 */

describe('MessageBoxMarketerialLayout', () => {
  const createDriver = createDriverFactory(MessageBoxMarketerialLayoutFactory);
  
  describe('action buttons', () => {
    it('should display the primary button label text on top the primary button', () => {
      const props = {
        primaryButtonLabel: 'primaryButtonLabel'
      };
      const driver = createDriver(<MessageBoxMarketerialLayout {...props}/>);
      expect(driver.getPrimaryButtonText()).toBe(props.primaryButtonLabel);
    });

    it('should not display the primary button if primary button label was nbot passed', () => {
      const props = {
      };
      const driver = createDriver(<MessageBoxMarketerialLayout {...props}/>);
      expect(driver.getPrimaryButton()).toBeNull();
    });

    it('should display the secondary button label text on top the secondary button', () => {
      const props = {
        secondaryButtonLabel: 'secondaryButtonLabel'
      };
      const driver = createDriver(<MessageBoxMarketerialLayout {...props}/>);
      expect(driver.getSecondaryButtonText()).toBe(props.secondaryButtonLabel);
    });

    it('should not display the secondary button if secondary button label was nbot passed', () => {
      const props = {
      };
      const driver = createDriver(<MessageBoxMarketerialLayout {...props}/>);
      expect(driver.getSecondaryButton()).toBeNull();
    });

    it(`should trigger the primary button action upon clicking the primary button`, () => {
      const props = {
        onPrimaryButtonClick: sinon.spy(),
        primaryButtonLabel: 'primaryButtonLabel'
      };
      const driver = createDriver(<MessageBoxMarketerialLayout {...props}/>);
      driver.clickOnPrimaryButton();
      expect(props.onPrimaryButtonClick.calledOnce).toBeTruthy();
    });

    it(`should trigger the secondary button action upon clicking the secondary button`, () => {
      const props = {
        onSecondaryButtonClick: sinon.spy(),
        secondaryButtonLabel: 'secondaryButtonLabel'
      };
      const driver = createDriver(<MessageBoxMarketerialLayout {...props}/>);
      driver.clickOnSecondaryButton();
      expect(props.onSecondaryButtonClick.calledOnce).toBeTruthy();
    });

    it(`should close the message dialog upon clicking the close button`, () => {
      const props = {
        onClose: sinon.spy()
      };
      const driver = createDriver(<MessageBoxMarketerialLayout {...props}/>);
      driver.onClose();
      expect(props.onClose.calledOnce).toBeTruthy();
      expect(driver.isMessageClosed()).toBeTruthy();
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<MessageBoxMarketerialLayout/>, messageBoxMarketeriallLayoutTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<MessageBoxMarketerialLayout/>, enzymeMessageBoxTestkitFactory)).toBe(true);
    });
  });


});
