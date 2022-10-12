import s from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ onChange }) {
  return (
    <div className={s.box}>
      <label className={s.label}>
        <span>Find contacts by name:</span>
        <input className={s.input} type="text" onChange={onChange} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
