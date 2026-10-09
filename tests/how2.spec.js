/*
npx playwright test tests/how2.spec.js
*/

import { test, expect } from '@playwright/test';

test('Laboratório How2', async ({ page }) => {

    // 1. Abrir o How2
    await page.goto('http://localhost:5173/howto/');

    // 2. Verificar o título
    await expect(page).toHaveTitle(/howto/i);

    // 3. Encontrar o link HoW2
    const logo = page.getByRole('link', { name: /HoW2/i });

    // 4. Verificar se está visível
    await expect(logo).toBeVisible();

    // 5. Clicar no logo
    await logo.click();

    // 6. Verificar a URL
    await expect(page).toHaveURL(/howto/);

    console.log(await page.url()); //imprime no terminal
});