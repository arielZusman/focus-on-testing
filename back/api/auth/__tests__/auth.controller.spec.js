import { login, signup, logout } from '../auth.controller';
import authService from '../auth.service';
import logger from '../../../services/logger.service';

describe('Auth controller', () => {
    describe('login() function', () => {
        it('should return authenticated user', async () => {
            // mock req object
            const req = {
                body: { email: 'test.user@test.com', username: 'testUser' },
                session: {
                    user: null
                }
            };

            // mock res object
            const res = {
                json: jest.fn()
            };

            // mock for authService.login response
            const authServiceResponse = {
                _id: '5d2992c4d6d64b42a48422d9',
                email: 'test.user@test.com',
                username: 'testUser'
            };
            // this is required in async test to make sure the test does not exit before
            // running the expectations
            expect.assertions(2);


            jest.spyOn(authService, 'login').mockResolvedValue(authServiceResponse);

            await login(req, res);
            expect(res.json).toHaveBeenCalledWith(authServiceResponse);
            expect(req.session.user).toEqual(authServiceResponse);
        });

        it('should return 401 when user is invalid', async () => {
            const req = {
                body: {email: 'test.user@test.com'}
            }
        })
    });
});
