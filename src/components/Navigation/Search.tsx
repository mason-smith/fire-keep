// @elastic/eui dependencies
import {
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiSelectableTemplateSitewide,
  EuiSelectableMessage,
} from '@elastic/eui';

export const Search = () => {
  return (
    <EuiSelectableTemplateSitewide
      options={[]}
      searchProps={{
        append: '⌘K',
        compressed: true,
      }}
      popoverButton={
        <EuiHeaderSectionItemButton aria-label="Sitewide search">
          <EuiIcon type="search" size="m" />
        </EuiHeaderSectionItemButton>
      }
      popoverButtonBreakpoints={['xs', 's']}
      popoverProps={{
        repositionOnScroll: true, // Necessary when placing search in a fixed component
      }}
      emptyMessage={
        <EuiSelectableMessage style={{ minHeight: 300 }}>
          <p>
            Please see the component page for{' '}
            <strong>EuiSelectableTemplateSitewide</strong>
            on how to configure your sitewide search.
          </p>
        </EuiSelectableMessage>
      }
    />
  );
};
