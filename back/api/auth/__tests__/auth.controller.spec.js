import { login, signup, logout } from '../auth.controller';
import authService from '../auth.service';
import logger from '../../../services/logger.service';

const mockRequest = body => ({
    session: { destroy: jest.fn() },
    body
});

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};
describe('Auth controller', () => {
    describe('login() function', () => {
        it('should return authenticated user', async () => {
            expect.assertions(2);

            const req = mockRequest({
                email: 'test.user@test.com',
                username: 'testUser'
            });
            // mock res object
            const res = mockResponse();

            // mock for authService.login response
            const authServiceResponse = {
                _id: '5d2992c4d6d64b42a48422d9',
                email: 'test.user@test.com',
                username: 'testUser'
            };
            // this is required in async test to make sure the test does not exit before
            // running the expectations

            jest.spyOn(authService, 'login').mockResolvedValue(
                authServiceResponse
            );

            await login(req, res);
            expect(res.json).toHaveBeenCalledWith(authServiceResponse);
            expect(req.session.user).toEqual(authServiceResponse);
        });

        it('should return 401 when user is invalid', async () => {
            expect.assertions(2);
            const req = mockRequest({ email: 'invalidUser@test.com' });
            const res = mockResponse();


            // make the authService.login reject
            jest.spyOn(authService, 'login').mockRejectedValue('ERROR MSG');

            await login(req, res);

            expect(res.status).toHaveBeenCalledWith(401);
            expect(res.send).toHaveBeenCalledWith({ error: 'ERROR MSG' });
        });
    });
});
