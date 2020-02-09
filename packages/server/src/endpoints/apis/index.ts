import { services } from '../../data/services'

export const apis: Record<string, any> = {
    '/':services['home'],
    '/blog':services['blog'],
    '/reserve':services['reserve'],
    '/shop':services['shop'],
    '/enquiry':services['enquiry'],
  };
  