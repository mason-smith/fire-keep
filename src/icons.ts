import { appendIconComponentCache } from '@elastic/eui/es/components/icon/icon';

import { icon as Apps } from '@elastic/eui/es/components/icon/assets/apps';
import { icon as AppDashboad } from '@elastic/eui/es/components/icon/assets/app_dashboard';
import { icon as AppLens } from '@elastic/eui/es/components/icon/assets/app_lens';
import { icon as ArrowDown } from '@elastic/eui/es/components/icon/assets/arrow_down';
import { icon as ArrowRight } from '@elastic/eui/es/components/icon/assets/arrow_right';
import { icon as ArrowUp } from '@elastic/eui/es/components/icon/assets/arrow_up';
import { icon as Calendar } from '@elastic/eui/es/components/icon/assets/calendar';
import { icon as Check } from '@elastic/eui/es/components/icon/assets/check';
import { icon as Cheer } from '@elastic/eui/es/components/icon/assets/cheer';
import { icon as Cross } from '@elastic/eui/es/components/icon/assets/cross';
import { icon as DocumentEdit } from '@elastic/eui/es/components/icon/assets/documentEdit';
import { icon as Dot } from '@elastic/eui/es/components/icon/assets/dot';
import { icon as EyeClosed } from '@elastic/eui/es/components/icon/assets/eye_closed';
import { icon as Eye } from '@elastic/eui/es/components/icon/assets/eye';
import { icon as Empty } from '@elastic/eui/es/components/icon/assets/empty';
import { icon as Home } from '@elastic/eui/es/components/icon/assets/home';
import { icon as Lock } from '@elastic/eui/es/components/icon/assets/lock';
import { icon as LockOpen } from '@elastic/eui/es/components/icon/assets/lockOpen';
import { icon as LogoAwsMono } from '@elastic/eui/es/components/icon/assets/logo_aws_mono';
import { icon as LogoAzureMono } from '@elastic/eui/es/components/icon/assets/logo_azure_mono';
import { icon as LogoKibana } from '@elastic/eui/es/components/icon/assets/logo_kibana';
import { icon as LogoSecurity } from '@elastic/eui/es/components/icon/assets/logo_security';
import { icon as LogoGoogleG } from '@elastic/eui/es/components/icon/assets/logo_google_g';
import { icon as Menu } from '@elastic/eui/es/components/icon/assets/menu';
import { icon as MinusInCircle } from '@elastic/eui/es/components/icon/assets/minus_in_circle';
import { icon as Refresh } from '@elastic/eui/es/components/icon/assets/refresh';
import { icon as ReturnKey } from '@elastic/eui/es/components/icon/assets/return_key';
import { icon as Save } from '@elastic/eui/es/components/icon/assets/save';
import { icon as Search } from '@elastic/eui/es/components/icon/assets/search';
import { icon as Training } from '@elastic/eui/es/components/icon/assets/training';
import { icon as Trash } from '@elastic/eui/es/components/icon/assets/trash';
import { icon as User } from '@elastic/eui/es/components/icon/assets/user';

export const iconComponentCache = () =>
  appendIconComponentCache({
    apps: Apps,
    dashboardApp: AppDashboad,
    lensApp: AppLens,
    arrowDown: ArrowDown,
    arrowRight: ArrowRight,
    arrowUp: ArrowUp,
    calendar: Calendar,
    check: Check,
    cheer: Cheer,
    cross: Cross,
    documentEdit: DocumentEdit,
    dot: Dot,
    empty: Empty,
    eye: Eye,
    eyeClosed: EyeClosed,
    home: Home,
    lock: Lock,
    lockOpen: LockOpen,
    logoAWSMono: LogoAwsMono,
    logoAzureMono: LogoAzureMono,
    logoKibana: LogoKibana,
    logoSecurity: LogoSecurity,
    logoGoogleG: LogoGoogleG,
    menu: Menu,
    minusInCircle: MinusInCircle,
    refresh: Refresh,
    returnKey: ReturnKey,
    save: Save,
    search: Search,
    training: Training,
    trash: Trash,
    user: User,
  });
