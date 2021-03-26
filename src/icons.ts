import { appendIconComponentCache } from '@elastic/eui/es/components/icon/icon';

import { icon as AppDashboadIcon } from '@elastic/eui/es/components/icon/assets/app_dashboard';
import { icon as AppLens } from '@elastic/eui/es/components/icon/assets/app_lens';
import { icon as ArrowUp } from '@elastic/eui/es/components/icon/assets/arrow_up';
import { icon as Apps } from '@elastic/eui/es/components/icon/assets/apps';
import { icon as ArrowRight } from '@elastic/eui/es/components/icon/assets/arrow_right';
import { icon as CheckIcon } from '@elastic/eui/es/components/icon/assets/check';
import { icon as CheerIcon } from '@elastic/eui/es/components/icon/assets/cheer';
import { icon as CrossIcon } from '@elastic/eui/es/components/icon/assets/cross';
import { icon as DotIcon } from '@elastic/eui/es/components/icon/assets/dot';
import { icon as EyeClosedIcon } from '@elastic/eui/es/components/icon/assets/eye_closed';
import { icon as EyeIcon } from '@elastic/eui/es/components/icon/assets/eye';
import { icon as HomeICon } from '@elastic/eui/es/components/icon/assets/home';
import { icon as LockIcon } from '@elastic/eui/es/components/icon/assets/lock';
import { icon as LockOpenIcon } from '@elastic/eui/es/components/icon/assets/lockOpen';
import { icon as LogoAwsMono } from '@elastic/eui/es/components/icon/assets/logo_aws_mono';
import { icon as LogoAzureMono } from '@elastic/eui/es/components/icon/assets/logo_azure_mono';
import { icon as LogoKibanaIcon } from '@elastic/eui/es/components/icon/assets/logo_kibana';
import { icon as LogoSecurityIcon } from '@elastic/eui/es/components/icon/assets/logo_security';
import { icon as LogoGoogleG } from '@elastic/eui/es/components/icon/assets/logo_google_g';
import { icon as Menu } from '@elastic/eui/es/components/icon/assets/menu';
import { icon as Search } from '@elastic/eui/es/components/icon/assets/search';
import { icon as Training } from '@elastic/eui/es/components/icon/assets/training';
import { icon as Trash } from '@elastic/eui/es/components/icon/assets/trash';
import { icon as UserIcon } from '@elastic/eui/es/components/icon/assets/user';

export const iconComponentCache = () =>
  appendIconComponentCache({
    dashboardApp: AppDashboadIcon,
    apps: Apps,
    lensApp: AppLens,
    arrowRight: ArrowRight,
    arrowUp: ArrowUp,
    check: CheckIcon,
    cheer: CheerIcon,
    cross: CrossIcon,
    dot: DotIcon,
    eyeClosed: EyeClosedIcon,
    eye: EyeIcon,
    home: HomeICon,
    lock: LockIcon,
    lockOpen: LockOpenIcon,
    logoAWSMono: LogoAwsMono,
    logoAzureMono: LogoAzureMono,
    logoKibana: LogoKibanaIcon,
    logoSecurity: LogoSecurityIcon,
    logoGoogleG: LogoGoogleG,
    menu: Menu,
    search: Search,
    training: Training,
    trash: Trash,
    user: UserIcon,
  });
