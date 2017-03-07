import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-addons-test-utils';

const imageViewerDriverFactory = ({component, wrapper, element}) => {

  const image = () => element.querySelector('[data-hook="image-viewer-image"]');
  const addImageButton = () => element.querySelector('[data-hook="add-image"]');
  const updateImageButton = () => element.querySelector('[data-hook="update-image"]');
  const removeImageButton = () => element.querySelector('[data-hook="remove-image"]');

  return {
    getImageUrl: () => image().getAttribute('src'),
    isImageVisible: () => !!image(),
    clickAdd: () => ReactTestUtils.Simulate.click(addImageButton()),
    clickUpdate: () => ReactTestUtils.Simulate.click(updateImageButton()),
    clickRemove: () => ReactTestUtils.Simulate.click(removeImageButton()),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default imageViewerDriverFactory;
