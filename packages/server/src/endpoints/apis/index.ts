import { services } from '../../data/services'

export const apis: Record<string, any> = {
    '/':services['home'],
    '/blog':services['blog'],
    '/availability':services['availability']
  };
  