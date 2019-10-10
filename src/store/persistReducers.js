// storage pega a estrategia padrao de persistencia da plataforma em questao
// no ReactNative ele pegaria o AsyncStora, no ReactJS ele pega o localStorage
// O ReduxPersist tem integracao com varias formas de persistencia local
// veja mais na doc do projeto
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'goBarber', // chave do app
      storage,
      whitelist: ['auth', 'user'], // quais reducers terao persistencia
    },
    reducers,
  );

  return persistedReducer;
};
