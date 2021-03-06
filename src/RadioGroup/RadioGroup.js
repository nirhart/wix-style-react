import React, {PropTypes} from 'react';
import uniqueId from 'lodash.uniqueid';
import RadioButton from './RadioButton/RadioButton';
import styles from './RadioGroup.scss';
import WixComponent from '../WixComponent';

class RadioGroup extends WixComponent {
  constructor(props) {
    super(props);
    this.name = uniqueId('RadioGroup_');
  }

  render() {
    const {onChange, disabled, disabledRadios, value, vAlign, display, type, spacing} = this.props;
    const style = {marginBottom: display === 'vertical' && spacing};

    return (
      <div className={styles[display]}>
        {React.Children.map(this.props.children, radio => (
          <RadioGroup.Radio
            value={radio.props.value}
            name={this.name}
            onChange={onChange}
            vAlign={vAlign}
            type={type}
            disabled={disabled || disabledRadios.indexOf(radio.props.value) !== -1}
            checked={radio.props.value === value}
            style={style}
            >
            {radio.props.children}
          </RadioGroup.Radio>
        ))}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabledRadios: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  vAlign: PropTypes.oneOf(['center', 'top']),
  disabled: PropTypes.string,
  type: PropTypes.string,
  display: PropTypes.oneOf(['vertical', 'horizontal']),
  children: PropTypes.arrayOf((propValue, key) => {
    if (propValue[key].type.name !== 'RadioButton') {
      return new Error(`RadioGroup: Invalid Prop children was given. Validation failed on child number ${key}`);
    }
  })
};

RadioGroup.defaultProps = {
  disabledRadios: [],
  onChange: () => {},
  value: '',
  vAlign: 'center',
  display: 'vertical',
  spacing: '12px'
};

RadioGroup.Radio = RadioButton;

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
