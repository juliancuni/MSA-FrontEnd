import { microservices.alPage } from './app.po';

describe('microservices.al App', function() {
  let page: microservices.alPage;

  beforeEach(() => {
    page = new microservices.alPage();
  });

  it('should display Angle in h1 tag', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angle');
  });
});
