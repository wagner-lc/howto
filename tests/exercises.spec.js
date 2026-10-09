/*
npx playwright test tests/exercises.spec.js
*/

import { test, expect } from '@playwright/test'

test('Laboratório HoW2', async ({ page }) => {

    // 1. Abrir o How2
    await page.goto('http://localhost:5173/howto/');
/*
    // 2. Encontrar o link React
    const react = page.getByRole('link', {
        name: '⚛️ React Biblioteca do'
    });
*/    
    /* Alternativo*/
    // 2. Encontrar o título React
    const react = page.getByRole('heading', {
        name: 'React',
        level: 2
    });

    const reactLink = react.locator('link', { name: /react/i });

    // 3. Verificar se React está visível
    await expect(reactLink).toBeVisible();
/*

    // 4. Clicar em React
    await react.click();

    // 5. Verificar se fomos para a página React
    await expect(page).toHaveURL(/react/);*/
});