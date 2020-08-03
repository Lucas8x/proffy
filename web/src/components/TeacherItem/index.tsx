import React from 'react';

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/6100670?s=460&u=a2979c731547a9486b09b86d34066d51e11cdd82&v=4" alt="Lucas" />
        <div>
          <strong>Lucas</strong>
          <span>Ragnarok</span>
        </div>
      </header>
      <p>
        Ensinando a upar nos esporos :v
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 10,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}