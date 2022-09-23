import { lazy } from 'react';
export const systemSetting = [
  {
    path: '/settingKey',
    name: 'settingKey',
    component: lazy(() => import('@/pages/systemManage/settingKey')),
  },
  {
    path: '/settingCoin',
    name: 'settingCoin',
    component: lazy(() => import('@/pages/systemManage/settingCoin')),
  },
  {
    path: '/incomeShow',
    name: 'incomeShow',
    component: lazy(() => import('@/pages/systemManage/incomeShow')),
  },
  {
    path: '/showLogs',
    name: 'showLogs',
    component: lazy(() => import('@/pages/systemManage/showLogs')),
  }
];
