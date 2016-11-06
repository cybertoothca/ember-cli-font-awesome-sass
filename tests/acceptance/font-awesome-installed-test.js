import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | font awesome installed');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('.fa-camera-retro').css('font-family'), 'FontAwesome');
    assert.equal(find('.fa-2x').css('font-size'), '32px');
    assert.equal(find('.fa-5x').css('font-size'), '80px');
  });
});
