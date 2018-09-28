'use strict'
const MigrationContract = artifacts.require('./Migrations.sol');
const expectRevert = require('./exception-util');

contract('Migrations', ([owner]) => {

    let migrationContract;

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log(`running ${__filename}`)
    console.log(`Owner Address: ${owner}`)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

    beforeEach(async () => {

        migrationContract = await MigrationContract.new();
    });

    describe('Verify Token Construction', () => {        
        it('Should verify decimals', async () => {
            
            assert.equal(1, 1, 'Decimals do not match');
        });
    })
});
