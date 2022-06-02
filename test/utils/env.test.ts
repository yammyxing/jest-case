import { config } from 'utils/env';

describe('env', () => {
    it('should be dev env', () => {
        jest.spyOn(config, 'getEnv').mockReturnValue('dev');

        expect(config.getEnv()).toEqual('dev');
    })

    it('should be prod env', () => {
        jest.spyOn(config, 'getEnv').mockReturnValue('prod');

        expect(config.getEnv()).toEqual('prod');
    })
})