import { AngularFireTestProjectPage } from './app.po';

describe('angular-fire-test-project App', function() {
  let page: AngularFireTestProjectPage;

  beforeEach(() => {
    page = new AngularFireTestProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
