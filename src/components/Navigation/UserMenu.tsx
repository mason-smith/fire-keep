import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// @elastic/eui dependencies
import {
  EuiAvatar,
  EuiHeaderSectionItemButton,
  EuiPopover,
  EuiText,
} from '@elastic/eui';

// Local Dependencies
import { firebaseAuth } from 'src/config/firebase.config';

export const UserMenu = () => {
  const [user] = useAuthState(firebaseAuth);
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
          <EuiAvatar name={user?.displayName || 'U'} size="s" />
        </EuiHeaderSectionItemButton>
      }
      isOpen={isUserMenuVisible}
      anchorPosition="downRight"
      closePopover={() => setIsUserMenuVisible(false)}
    >
      <div style={{ width: 320 }}>
        <EuiText size="s" color="subdued">
          <pre>{JSON.stringify(user?.toJSON(), null, 2)}</pre>
        </EuiText>
      </div>
    </EuiPopover>
  );
};
