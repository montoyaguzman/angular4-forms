import { Angular4FormsPage } from './app.po';

describe('angular4-forms App', function() {
  let page: Angular4FormsPage;

  beforeEach(() => {
    page = new Angular4FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
