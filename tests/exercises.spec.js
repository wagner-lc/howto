/*
npx playwright test tests/exercises.spec.js
npx playwright show-report
npx playwright codegen http://localhost:5173/howto/
*/

import { test, expect } from '@playwright/test'

//🧪 Teste 1 — A página inicial está correta?
/*
test('Abrir o título', async ({ page }) => {

    await page.goto('http://localhost:5173/howto/');

    await expect(page).toHaveURL(/\/howto\/$/);

});

test('Título Howto ', async ({page}) => {

    await page.goto('http://localhost:5173/howto/');

    await expect(page).toHaveTitle(/howto/i);

});

test('Link/logo visível', async({page}) => {

    await page.goto('http://localhost:5173/howto/');
    
    const logo = page.getByRole('link', { name: /HoW2/i });

    await expect(logo).toBeVisible();


});
*/
//🧪 Teste 2 — O React está disponível?

/*
Existe um heading React de nível 2.
O link correspondente está visível.
Clicando nele, vamos para /howto/react.

test('React abre a categoria correta', async ({ page }) => {
    await page.goto('http://localhost:5173/howto/');

    const reactLink = page.getByRole('link', {
        name: /React Biblioteca do JavaScript/
    });

    await expect(reactLink).toBeVisible();
    await reactLink.click();

    await expect(page).toHaveURL(/\/howto\/react$/);
});
*/

/* 🧪 Teste 3 — HTML

Página inicial
     ↓
HTML visível
     ↓
clicar
     ↓
/howto/html



test('HTML abre a categoria correta', async ({ page }) => {
    await page.goto('http://localhost:5173/howto/');

    const htmlLink = page.getByRole('link', {
        name: /HTML Estrutura e criação das páginas/
    });

    await expect(htmlLink).toBeVisible();
    await htmlLink.click();

    await expect(page).toHaveURL(/\/howto\/html$/);
});

*/
/*
🧪 Teste 4 — JavaScript

Página inicial
     ↓
JavaScript
     ↓
clicar
     ↓
/howto/javascript


test('JavaScript abre a categoria correta', async ({ page }) => {
    await page.goto('http://localhost:5173/howto/');

    const jsLink = page.getByRole('link', {
        name: /JavaScript Interações/
    });

    await expect(jsLink).toBeVisible();
    await jsLink.click();

    await expect(page).toHaveURL(/\/howto\/javascript$/);
});

*/
/*
🧪 Teste 5
Página React
    ↓
Heading "React"
    ↓
algum conteúdo específico da página

Abra sua página React e escolha um elemento que você considera importante para o usuário encontrar.

"O que vale a pena testar no meu sistema?"
*/

test('React', async ({page}) => {
    await page.goto('http://localhost:5173/howto/');

    const heading = page.getByRole('heading', {name: 'React', level: 2});

    await expect(heading).toBeVisible();

    await page.goto('http://localhost:5173/howto/react');

    // 1. Encontrar uma seção mais abaixo
    const secao = page.locator('#visao-geral')
        .getByRole('heading', { name: '🧠 No HoW to!' });

    // 2. Rolar até a seção
    await secao.scrollIntoViewIfNeeded();

    // 3. Confirmar que a página rolou
    await expect.poll(
        () => page.evaluate(() => window.scrollY)
    ).toBeGreaterThan(0);

    // 4. Clicar no botão voltar ao topo
    await page.getByRole('button', { name: '↑' }).click();

    // 5. Confirmar que a página voltou ao topo
    await expect.poll(
        () => page.evaluate(() => window.scrollY)
    ).toBe(0);
});
