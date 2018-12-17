import { videogular2ShowroomPage } from './app.po';

describe('videogular2-showroom App', () => {
  let page: videogular2ShowroomPage;

  beforeEach(() => {
    page = new videogular2ShowroomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
