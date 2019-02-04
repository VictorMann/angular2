import { LivroAngular2Page } from './app.po';

describe('livro-angular2 App', () => {
  let page: LivroAngular2Page;

  beforeEach(() => {
    page = new LivroAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
