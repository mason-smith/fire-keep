import { useState } from 'react';

// @elastic/eui dependencies
import {
  EuiAvatar,
  EuiHeaderSectionItemButton,
  EuiPopover,
  EuiText,
} from '@elastic/eui';

export const UserMenu = () => {
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  return (
    <EuiPopover
      id="guideHeaderUserMenuExample"
      repositionOnScroll
      button={
        <EuiHeaderSectionItemButton
          aria-controls="guideHeaderUserMenuExample"
          aria-expanded={isUserMenuVisible}
          aria-haspopup="true"
          aria-label="User menu"
          onClick={() => setIsUserMenuVisible(!isUserMenuVisible)}
        >
          <EuiAvatar name="John Username" size="s" />
        </EuiHeaderSectionItemButton>
      }
      isOpen={isUserMenuVisible}
      anchorPosition="downRight"
      closePopover={() => setIsUserMenuVisible(false)}
    >
      <div style={{ width: 320 }}>
        <EuiText size="s" color="subdued">
          <p>
            Please see the component page for <strong>EuiHeader</strong>
            on how to configure your user menu.
          </p>
        </EuiText>
      </div>
    </EuiPopover>
  );
};
