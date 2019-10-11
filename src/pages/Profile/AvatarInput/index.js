import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const { email } = useField('email');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file', // referencia do data-file - comeca com data vai para o dataset .-
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    // cria um multpart formdata a adiciona o arquivo nele
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('/files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={preview || `https://api.adorable.io/avatars/120/${email}`}
          alt="Foto de perfil"
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
          data-file={file} // toda param que comeca com data vai para o dataset
          // TODO - ESTA GERANDO CHAMADA RECURSIVA - ENTENDER O PQ na doc do UNFORM
          // ref={ref} // definindo a referencia para poder registrar o campo no unform
        />
      </label>
    </Container>
  );
}
