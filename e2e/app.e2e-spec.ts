import { NyrsmPage } from './app.po';

describe('nyrsm App', () => {
  let page: NyrsmPage;

  beforeEach(() => {
    page = new NyrsmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
