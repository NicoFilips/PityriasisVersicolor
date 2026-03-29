import { SegmentedControl } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('de') ? 'de' : 'en';

  return (
    <SegmentedControl
      size="xs"
      value={current}
      onChange={(val) => i18n.changeLanguage(val)}
      data={[
        { label: 'EN', value: 'en' },
        { label: 'DE', value: 'de' },
      ]}
    />
  );
}
