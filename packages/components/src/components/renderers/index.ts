import homePageRenderer from './home-page-renderer';

export const renderers: Record<string, any> = {
  [homePageRenderer.type]: homePageRenderer.renderer,
};
