class CoolJobs {
  async weWantYou(job: {
    name: string;
    excitementLevel: string;
    mascot: string;
    owlPun: string;
    jobTitle: string;
    jobDescription: string;
  }) {
    return new Promise(resolve => {
      // http://asciiart.club
      const workAtReadme = `
       .
       .\\\\                          /.
      ’  ‘                        ‘ ‘
      ( nn\\\\    .           .     /  )
      (nnnnn,.MM.          AM   .nn.
       .nnnndMM----_______--M.’’   /
       |nnn/nnnnnnnnnnnnnnnnn\\\\’mmm/
       /nnnn...nnnnnnnnnnn...mmmmm\\\\
      /nn        ‘qnnnP’       ‘mmm\\\\
      /n’   .XXX. \\\\nnn/   .XX.  \\\\mmb
      An   (XOXX)  nnn   (XOXX)  mm\\\\
     /nn   ‘XXXX’.~”~.   ‘XXX”’ .mmmb
     dnnn.      (    )n.       .mmmmb
    .nnnnnn....n.\\\\ ./nnnnnnnnnmmmmmm\\\\
  (READnnnnnnnnnnn’Y’nnnnnnnnnnmmmmmmME)
  REinnnnnnnnnnnnnnnnnnnnnnnnnmmmmmmmAD/
 /MEEnnnnnnnnnnnnnnnnnnnnnnnnnmmmmmmm)E'.
 READnnnnnnn*’             ‘*mmmmmmmm)MEE.
(READ|nnnn’    \\\\../  \\\\.../    ‘mmmmmM)EEE)
 READ(nn*’                      ‘mmm.MEEE)
  ‘READn’  \\\\._./  \\\\__./  \\\\.../     ‘MEE*’
       *                           /*

Hey ${job.name.split(' ')[0]}, Owlbert says come join us!`;

      console.log(workAtReadme);

      resolve(true);
    });
  }
}

const sdk = (() => {
  return new CoolJobs();
})();

/**
 * We're exporting the SDK to ES5 and ES6 exports so we can maintain compatibility between the two
 * without having a silly TS config.
 *
 * @example `import sdk from '@readme/cooljobs';`
 * @example `const sdk = require('@readme/cooljobs);`
 */
export default sdk;
module.exports = sdk;
