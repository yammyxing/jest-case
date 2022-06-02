import { config } from 'utils/env';

describe('env', () => {
    it('should be dev env', () => {
        jest.spyOn(config, 'env', 'get').mockReturnValue('dev');

        expect(config.env).toEqual('dev');
    })

    it('should be prod env', () => {
        jest.spyOn(config, 'env', 'get').mockReturnValue('prod');

        expect(config.env).toEqual('prod');
    })
})