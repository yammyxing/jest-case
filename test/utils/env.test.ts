import * as envUtils from 'utils/env';

describe('env', () => {
    it('should be dev env', () => {
        jest.spyOn(envUtils, 'getEnv').mockReturnValue('dev');

        expect(envUtils.getEnv()).toEqual('dev');
    })

    it('should be prod env', () => {
        jest.spyOn(envUtils, 'getEnv').mockReturnValue('prod');

        expect(envUtils.getEnv()).toEqual('prod');
    })
})