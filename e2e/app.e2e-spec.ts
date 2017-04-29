import { NgfAwesomePage } from './app.po';

describe('ngf-awesome App', () => {
  let page: NgfAwesomePage;

  beforeEach(() => {
    page = new NgfAwesomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
