import { FirebaseprojectPage } from './app.po';

describe('firebaseproject App', function() {
  let page: FirebaseprojectPage;

  beforeEach(() => {
    page = new FirebaseprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
