import { WebCVPage } from './app.po';

describe('web-cv App', () => {
  let page: WebCVPage;

  beforeEach(() => {
    page = new WebCVPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cv!');
  });
});
