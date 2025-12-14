import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLang = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem('i18nextLng', lng);
    } catch (e) {
      // ignore
    }
  };

  return (
    <select
      value={i18n.language || 'en'}
      onChange={changeLang}
      className="ml-4 border rounded px-2 py-1 text-sm"
      aria-label="Select language"
    >
      <option value="en">EN</option>
      <option value="zh">中文</option>
      <option value="nl">NL</option>
    </select>
  );
};

export default LanguageSelector;
