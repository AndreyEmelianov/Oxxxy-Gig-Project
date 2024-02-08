import { ChangeEvent, FC, FormEvent, useState } from 'react';

import { Icon } from '../Icon/Icon';

export const FooterForm: FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInputValue('');
  };

  return (
    <form className="footer-form" onSubmit={handleFormSubmit}>
      <p>онлик Мирона</p>

      <div className="footer-form__email">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <button className="footer-form__btn" type="submit">
        <span>Подписаться</span>
        <Icon name="arrow-right" />
      </button>
    </form>
  );
};
