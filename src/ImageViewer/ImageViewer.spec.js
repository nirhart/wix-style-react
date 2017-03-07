import {expect} from 'chai';
import * as React from 'react';
import {ImageViewer} from './ImageViewer';
import {createDriverFactory} from 'wix-style-react/dist/src/test-common';
import imageViewerDriverFactory from './ImageViewer.driver';
import {spy} from 'sinon';

describe('ImageViewer', () => {

  const createDriver = createDriverFactory(imageViewerDriverFactory);
  let props, driver;
  const IMAGE_URL = 'some-image-url.png';
  const addImage = spy();
  const updateImage = spy();
  const removeImage = spy();

  describe('when default scenario', () => {
    beforeEach(() => {
      props = {
        imageUrl: IMAGE_URL,
        onAddImage: addImage,
        onUpdateImage: updateImage,
        onRemoveImage: removeImage
      };
      driver = createDriver(<ImageViewer {...props}/>);
    });

    it('should display image url', () => {
      expect(driver.getImageUrl()).is.equals(IMAGE_URL);
    });

    it('should trigger add image', () => {
      driver.clickAdd();
      expect(addImage.called).to.be.true;
    });

    it('should trigger update image', () => {
      driver.clickUpdate();
      expect(updateImage.called).to.be.true;
    });

    it('should trigger remove image', () => {
      driver.clickRemove();
      expect(removeImage.called).to.be.true;
    });

  });

  it('should not display image if not exists', () => {
    props = {
      imageUrl: ''
    };
    driver = createDriver(<ImageViewer {...props}/>);
    expect(driver.isImageVisible()).to.be.false;
  });

});
