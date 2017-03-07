import * as React from 'react';
import * as css from './ImageViewer.scss';
import {Tooltip} from 'wix-style-react';
import {Trash3, Replace} from 'wix-style-react/dist/src/Icons/dist';

export const ImageViewer = ({imageUrl, onAddImage, onUpdateImage, onRemoveImage}) => {

  const tooltipCommonProps = {
    showDelay: 0,
    hideDelay: 0,
    align: 'center',
    placement: 'top',
    moveBy: {x: 2, y: 0}
  };

  return (
    <div className={`${css.container} ${imageUrl && css.hasLogo}`}>
      <div data-hook="add-image" className={css.addLogo} onClick={onAddImage}>
        <div className={css.dashedBorder}></div>
        <div className={css.plusIcon}></div>
      </div>
      {!!imageUrl &&
      <div className={css.changeLogoContainer}>
        <div className={css.imageLayout}>
          <img data-hook="image-viewer-image" className={css.image} src={imageUrl}/>
        </div>
        <div className={css.imageBackground}>
          <div className={css.buttons}>
            <Tooltip content="Replace" {...tooltipCommonProps}>
              <div data-hook="update-image" className={css.button} onClick={onUpdateImage}>
                <Replace size="1.2em"/>
              </div>
            </Tooltip>
            <Tooltip content="Remove" {...tooltipCommonProps}>
              <div data-hook="remove-image" className={css.button} onClick={onRemoveImage}>
                <Trash3 size="1.2em"/>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      }
    </div>
  );
};
