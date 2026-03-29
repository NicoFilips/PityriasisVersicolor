import { Spotlight, spotlight } from '@mantine/spotlight';
import '@mantine/spotlight/styles.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  IconHome,
  IconBook,
  IconMicroscope,
  IconPill,
  IconFileSearch,
  IconHeartbeat,
  IconZoomQuestion,
  IconSearch,
} from '@tabler/icons-react';
import { ActionIcon, Tooltip } from '@mantine/core';

const pages = [
  {
    id: 'home',
    path: '/',
    icon: IconHome,
    titleKey: 'nav.home',
    searchKeys: ['home.heroTitle', 'home.heroText', 'home.whatIs.title', 'home.whatIs.text'],
  },
  {
    id: 'story',
    path: '/story',
    icon: IconBook,
    titleKey: 'nav.story',
    searchKeys: [
      'story.title', 'story.intro', 'story.beginning.text', 'story.affected.chest',
      'story.affected.back', 'story.affected.mild', 'story.struggle.text', 'story.discovery.text',
    ],
  },
  {
    id: 'disease',
    path: '/disease',
    icon: IconMicroscope,
    titleKey: 'nav.disease',
    searchKeys: [
      'disease.title', 'disease.definition.text', 'disease.pathogen.text',
      'disease.pathogenesis.text', 'disease.pathogenesis.triggers', 'disease.pathogenesis.mechanism',
      'disease.symptoms.text', 'disease.symptoms.alba.text', 'disease.symptoms.rubra.text',
      'disease.diagnosis.text', 'disease.diagnosis.methods',
    ],
  },
  {
    id: 'treatments',
    path: '/treatments',
    icon: IconPill,
    titleKey: 'nav.treatments',
    searchKeys: [
      'treatments.title', 'treatments.intro', 'treatments.topical.ketoconazole.name',
      'treatments.topical.nizoral.name', 'treatments.oral.text', 'treatments.diet.text',
      'treatments.diet.why', 'treatments.triggers.carbs', 'treatments.triggers.alcohol',
      'treatments.triggers.sugar', 'treatments.honest.text',
      'treatments.supplements.zinc.name', 'treatments.supplements.probiotics.name',
      'treatments.supplements.inulin.name', 'treatments.supplements.spirulina.name',
      'treatments.supplements.omega3.name', 'treatments.supplements.chia.name',
      'treatments.supplements.garlic.name',
    ],
  },
  {
    id: 'research',
    path: '/research',
    icon: IconFileSearch,
    titleKey: 'nav.research',
    searchKeys: [
      'research.title', 'research.intro', 'research.misdiagnosis.text',
      'research.dietFungal.text', 'research.probioticsSkin.text',
      'research.immuneSystem.text', 'research.communityNote.text',
    ],
  },
  {
    id: 'gutSkin',
    path: '/gut-skin',
    icon: IconHeartbeat,
    titleKey: 'nav.gutSkin',
    searchKeys: [
      'gutSkin.title', 'gutSkin.intro', 'gutSkin.connection.text',
      'gutSkin.candida.text', 'gutSkin.candida.evidence1', 'gutSkin.candida.evidence2',
      'gutSkin.candida.evidence3', 'gutSkin.pvCandida.text',
      'gutSkin.strategy.probiotics', 'gutSkin.strategy.diet',
      'gutSkin.tryThis.text',
    ],
  },
  {
    id: 'misdiagnosis',
    path: '/misdiagnosis',
    icon: IconZoomQuestion,
    titleKey: 'nav.misdiagnosis',
    searchKeys: [
      'misdiagnosis.title', 'misdiagnosis.intro', 'misdiagnosis.important.text',
      'misdiagnosis.conditions.vitiligo.name', 'misdiagnosis.conditions.vitiligo.desc',
      'misdiagnosis.conditions.alba.name', 'misdiagnosis.conditions.alba.desc',
      'misdiagnosis.conditions.rosea.name', 'misdiagnosis.conditions.rosea.desc',
      'misdiagnosis.conditions.tinea.name', 'misdiagnosis.conditions.tinea.desc',
      'misdiagnosis.conditions.seborrheic.name', 'misdiagnosis.conditions.seborrheic.desc',
      'misdiagnosis.conditions.pmh.name', 'misdiagnosis.conditions.pmh.desc',
      'misdiagnosis.conditions.mycosis.name', 'misdiagnosis.conditions.mycosis.desc',
      'misdiagnosis.conditions.pmh.comparison.quickRule',
      'misdiagnosis.advice.text',
    ],
  },
];

function useSearchActions() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return pages.map((page) => {
    const Icon = page.icon;
    const searchText = page.searchKeys.map((key) => t(key)).join(' ');

    return {
      id: page.id,
      label: t(page.titleKey),
      description: searchText.slice(0, 120) + '...',
      onClick: () => navigate(page.path),
      leftSection: <Icon size={18} />,
      keywords: searchText.toLowerCase(),
    };
  });
}

export function SearchButton() {
  return (
    <Tooltip label="Search (Ctrl+K)">
      <ActionIcon
        variant="default"
        size="lg"
        radius="md"
        onClick={spotlight.open}
        aria-label="Search"
      >
        <IconSearch size={18} />
      </ActionIcon>
    </Tooltip>
  );
}

export default function Search() {
  const actions = useSearchActions();

  return (
    <Spotlight
      actions={actions}
      nothingFound="Nothing found..."
      highlightQuery
      searchProps={{
        leftSection: <IconSearch size={18} />,
        placeholder: 'Search pages and content...',
      }}
      shortcut="mod+k"
    />
  );
}
