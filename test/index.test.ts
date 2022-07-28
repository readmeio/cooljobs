import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import sdk from '../src';

chai.use(sinonChai);

describe('#weWantYou', function () {
  it('should print a ridiculious owlbert to the terminal', async () => {
    const consoleStub = sinon.stub(console, 'log');

    await sdk.weWantYou({
      name: 'Jon Ursenbach',
      excitementLevel: '💯',
      mascot: '🦉',
      owlPun: ' ',
      jobTitle: 'Markdown Engineer',
      jobDescription: 'https://readme.com/careers#software-engineer-markdown-specialist',
    });

    expect(consoleStub).to.be.calledWithMatch(/Hey Jon, Owlbert says come join us!/);
    consoleStub.restore();
  });
});
