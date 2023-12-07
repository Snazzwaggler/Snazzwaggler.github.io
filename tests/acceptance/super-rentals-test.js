import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'snazzwaggler/tests/helpers';

// Acceptance tests test from the user's perspective.

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');

    // assert.dom('h2').hasText("Welcome to Super Rentals!");

    // assert.dom('.jumbo a.button').hasText('About Us');
    // await click('.jumbo a.button');

    // assert.strictEqual(currentURL(), '/about');
  });
});
