import reducer, { updateUserName } from 'store/user/reducer'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import server from '../../mockServer/server'
import { rest } from 'msw'
import { fetchUserThunk } from 'store/user/thunks'

const setupHttp = (name?: string, age?: number) => {
    server.use(
        rest.get('http://mysite.com/api/users', async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    id: '1',
                    name: name || 'jack',
                    age: age || 18
                })
            )
        })
    )
}

describe('reducer', () => {
    describe('test reducer', () => {
        describe('updateUserName', () => {
            it('should update user name', () => {
                const currentUser = reducer({
                    id: '',
                    name: '',
                    age: 0,
                    status: ''
                },
                updateUserName(({name: 'hello'}))
                )
                expect(currentUser.name).toEqual('hello')
            })
        })

        describe("fetchUserThunk", () => {
            it("should fetch user", async () => {
              // Mock Http 返回
              setupHttp("Mary", 10);
      
              // Mock redux 的 store
              const middlewares = [thunk];
              const mockStore = configureStore(middlewares);
              const store = mockStore({
                id: "",
                name: "",
                age: 0,
                status: "",
              });
      
              // 开始 dispatch
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              const data = await store.dispatch(fetchUserThunk());
      
              expect(data.payload).toEqual({
                id: "1",
                name: "Mary",
                age: 10,
              });
      
              // 失败，因为 redux-mock-store 只能测 action 部分
              // 详情：https://github.com/reduxjs/redux-mock-store/issues/71
              // expect(store.getState()).toEqual({
              //   id: "1",
              //   name: "Mary",
              //   age: 10,
              //   status: "complete",
              // });
            });
          });
    })
})